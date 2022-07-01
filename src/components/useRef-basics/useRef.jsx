import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  console.log(inputValue);

  const refContainer = useRef(null);
  const divContainer = useRef(null)

  const handleSubmit = e=>{
    e.preventDefault();
    console.log(refContainer.current.value);
  }
  
  useEffect(() => {
    count.current = count.current + 1;
    console.log(refContainer.current);
    console.log(divContainer.current);
  });

  console.log(count);
  
  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={refContainer} />
        <button type="submit">Submit</button>
      </div>
    </form>
    <div ref={divContainer}>Hello World</div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render count: {count.current}</h1>
    </>
  );
};

export default UseRef;
