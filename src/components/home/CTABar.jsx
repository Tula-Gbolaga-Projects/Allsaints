import { useState } from "react";
const CTABar = () => {
  const [showFirst, setShowFirst] = useState(true);

  const changeContent = () => {
    setShowFirst((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center bg-[#ebeae6] p-2">
      <button className="px-3 font-bold shrink-0" onClick={changeContent}>
        {`<`}
      </button>

      <div className=" mx-2 overflow-hidden text-sm w-[300px]">
        <div className="text-center truncate">
          {showFirst ? (
            <>
              Summer Collection: Shop <span className="underline">Women</span> &{" "}
              <span className="underline">Men</span>
            </>
          ) : (
            <>
              Free <span className="underline">Delivery</span> and{" "}
              <span className="underline">Returns</span>
            </>
          )}
        </div>
      </div>

      <button className="px-3 font-bold shrink-0" onClick={changeContent}>
        {`>`}
      </button>
    </div>
  );
};
export { CTABar };
