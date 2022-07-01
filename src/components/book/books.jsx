import React, { useState } from "react";
import "./books.css";
import Counter from "./Counter";

const Books = (props) => {
  const [title, setTitle] = useState(props.title);

  const titleChangeHandler = () => {
    setTitle("Harry Potter")
  }
  const titleResetHandler = () => {
    setTitle(props.title)
  }


  return (
    <div className="book">
      <img className="book__img" src={props.img} alt="Atomic Habits" />
      <div className="book__info">
        <h2>{title}</h2>
        <p>{props.author}</p>
        <br />
        <button className="book__card-btn" 
          onClick={titleChangeHandler}>
          Change Title
        </button>
        <br/>
        <button className="book__card-btn" onClick={titleResetHandler}>Reset Title</button>
        <Counter/>
      </div>
    </div>
  );
};

export default Books;
