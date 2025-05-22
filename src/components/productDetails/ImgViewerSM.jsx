import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const ImgViewerSM = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full mx-auto overflow-hidden lg:hidden "
    >
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-auto object-cover transition-all duration-500"
      />

      {/* Dots in bottom left overlay */}
      <div className="absolute bottom-3 left-3 flex space-x-2 0 px-2 py-1 rounded-full backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export { ImgViewerSM };
