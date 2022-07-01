import React, { useState } from "react";
import "./addNewBook.css"

function AddNewBook() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    const newBookData = {
        title: enteredTitle,
        author: enteredAuthor
    } 
    console.log(newBookData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="add__new-book">
        <div className="new__book-controls">
          <div className="new__book-control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new__book-control">
            <label>Author</label>
            <input type="text" onChange={authorChangeHandler} />
          </div>
        </div>
        <div className="new__book-actions">
            <button  className="submit">Add Book</button>
        </div>
      </div>
    </form>
  );
}

export default AddNewBook;
