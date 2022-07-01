import React, { useState } from "react";

const ShortCircuit = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <h1>Hello</h1>}
    </>
  );
};

export default ShortCircuit;
