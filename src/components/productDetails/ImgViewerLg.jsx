import { useState, useRef, useEffect } from "react";

const ImgViewerLg = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomPosition, setZoomPosition] = useState(null);
  const fullscreenRef = useRef();

  const showPrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const handleKeyDown = (e) => {
    if (isFullscreen) {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setIsFullscreen(false);
    }
  };

  useEffect(() => {
    if (isFullscreen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isFullscreen]);

  return (
    <div
      className="relative w-full mx-auto hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setZoomPosition(null);
      }}
    >
      {/* Main Image */}
      <div
        className="w-full relative"
        // onClick={() => setIsFullscreen(true)}
      >
        <img
          src={images[activeIndex]}
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Thumbnails on Hover */}
      {isHovered && (
        <div className="absolute left-6 top-[10%]  flex flex-col gap-2 p-2  bg-opacity-80 rounded">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setActiveIndex(idx)}
              className={`w-14 h-20 object-cover cursor-pointer `}
            />
          ))}
        </div>
      )}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={showPrev}
            className="absolute left-2 top-1/2  p-2  text-[25px] "
          >
            ‹
          </button>
          <button
            onClick={showNext}
            className="absolute right-2 top-1/2  p-2 text-[25px]"
          >
            ›
          </button>
        </>
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          ref={fullscreenRef}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center cursor-zoom-out"
          onClick={() => {
            setIsFullscreen(false);
            setZoomPosition(null);
          }}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoomPosition(null)}
          >
            <img
              src={images[activeIndex]}
              alt=""
              className="w-full h-full object-contain transition-transform duration-150 ease-linear"
              style={
                zoomPosition
                  ? {
                      transform: "scale(2)",
                      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    }
                  : {}
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { ImgViewerLg };
