import React from "react";
import useWindowResize from "./useWindowResize";

const UseWindowReziseTest = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>Use Window Rezise Hook</h1>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
};

export default UseWindowReziseTest;
