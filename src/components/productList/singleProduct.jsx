import { useState } from "react";

const SingleProduct = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const activeImage = product.images[selectedColor]?.[isHovered ? 1 : 0];

  return (
    <div className=" group mb-[20px] lg:mb-[50px]">
      <div
        className="relative pb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowSizes(false);
        }}
      >
        {/* Wishlist Icon */}
        {isHovered && (
          <div className="absolute top-2 right-2 z-10">
            <button className="text-black">♡</button>
          </div>
        )}

        {/* Product Image */}
        <img
          src={activeImage}
          alt={product.title}
          className="w-full  transition duration-300"
        />

        {/* Quick Add to Bag */}

        <div
          className="absolute bottom-3 inset-x-0 m-2 "
          onMouseEnter={() => setShowSizes(true)}
          onMouseLeave={() => setShowSizes(false)}
        >
          <p className="bg-white w-max px-2 rounded mb-2"> Bestseller</p>
          {isHovered && (
            <div className="bg-white">
              <div className=" bg-white py-2 font-semibold text-center">
                QUICK ADD TO BAG
              </div>

              {showSizes && (
                <div className="mt-2 flex justify-center gap-2 bg-white py-2 rounded">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="border px-2 py-1 hover:bg-black hover:text-white"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-2 px-4">
        <p className="font-semibold">{product.title}</p>
        <p className="text-lg font-bold">£{product.price}</p>

        {/* Color Selector */}
        <div className="flex gap-2 mt-1">
          {Object.keys(product.images).map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-4 h-4 rounded-full border ${
                selectedColor === color
                  ? "ring-2 ring-black border border-white border-2"
                  : ""
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
export { SingleProduct };
