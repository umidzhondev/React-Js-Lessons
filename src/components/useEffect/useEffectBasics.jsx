import React, { useState, useEffect } from "react";
// TODO: useEffect by default render bo'ladi
// * celean up function
// ? second parametr

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Call useEffect");
    if(value >= 5){
        document.title = `New Messages (${value})`;
    }
  },[value]);
  console.log("Render component");
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>Click me</button>
    </>
  );
};

export default UseEffectBasics;
