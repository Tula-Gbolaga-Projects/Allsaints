import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SampleProducts } from "../../utils/data";
import { SingleProduct } from "../productList";

const RecommendationSlider = ({ products }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full my-[40px]">
      <div className="flex justify justify-between px-[80px]">
        <p className="text-[35px]">You May Also Like</p>{" "}
        <div>
          <button onClick={() => scroll("left")}>
            <ChevronLeft />
          </button>{" "}
          <button onClick={() => scroll("right")}>
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-1 custom-scrollbar-hidden ml-[80px]"
      >
        {SampleProducts?.map((product, idx) => {
          return (
            <div key={idx} className="max-w-[350px] flex-shrink-0">
              <SingleProduct product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { RecommendationSlider };
