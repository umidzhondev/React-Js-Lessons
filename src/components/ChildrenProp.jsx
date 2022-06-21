import React from "react";
import "./books.css";

const ChildrenProp = (props) => {
    console.log(props);
  return (
    <div>
      <div className="border__box">{props.children}</div>
      {/* <div className="border__box">{props.left}</div> */}
    </div>
  );
};

export default ChildrenProp;
