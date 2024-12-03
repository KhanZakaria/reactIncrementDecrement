import { useEffect, useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((count = count + 1));
  }
  function handleDecrement() {
    count > 0 && setCount((count = count - 1));
  }

  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-[45px] text-green-500 p-5">{count}</h1>
      <div className="flex gap-2">
        <button
          onClick={handleIncrement}
          className="border rounded-md bg-black text-white px-4 py-3 uppercase hover:bg-gray-600 hover:text-green-200"
        >
          increment
        </button>
        {count > 0 && (
          <button
            onClick={handleDecrement}
            className="border rounded-md bg-black text-white px-4 py-3 uppercase hover:bg-gray-600 hover:text-green-200"
          >
            decrement
          </button>
        )}
      </div>
    </div>
  );
};

export default Count;
