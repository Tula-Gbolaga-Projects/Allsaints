import { useState } from "react";
const CTABar = () => {
  const [showFirst, setShowFirst] = useState(true);

  const changeContent = () => {
    setShowFirst((prev) => !prev);
  };

  console.log(showFirst);
  return (
    <div className="flex p-2 justify-center bg-[#ebeae6] ">
      <button className="px-5 font-bold" onClick={changeContent}>{`<`}</button>
      {showFirst ? (
        <span>
          Summer Collection: Shop <span className="underline">Women</span> &{" "}
          <span className="underline">Men</span>
        </span>
      ) : (
        <span>
          {" "}
          Free <span className="underline">Delivery</span> and{" "}
          <span className="underline">Returns</span>
        </span>
      )}

      <button className="px-5 font-bold" onClick={changeContent}>{`>`}</button>
    </div>
  );
};
export { CTABar };
