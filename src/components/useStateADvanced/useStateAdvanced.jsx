import React, { useState } from "react";
import { data } from "../data";
import "./useStateAdvanced.css";

const UseStateAdvanced = () => {
  // console.log(useState("Hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value,handler);
  const [people,setPeople] = useState(data);
  const removeItem = (id) =>{
    let newPeople = people.filter(person=>person.id !==id );
    setPeople(newPeople);
  }
  const [inputValue,setInputValue] = useState('');
  const addItem = () =>{
    const newItem = {id: people[people.length-1].id+1,name: inputValue} 
    setPeople([...people,newItem])
  }
  return (
    <React.Fragment>

      <div className="add__item">
        <input className="add__item-input" onChange={(e)=> setInputValue(e.target.value) } type="text" placeholder="Enter item name" />
        <button className="item__btn" onClick={addItem}>Add</button>
      </div>
      
      {people.map((person,index)=>{
        const {id,name} = person;
        return(
          <div className="item" key={index}>
            <h4>{name}</h4>
            <button className="item__btn" onClick={()=> removeItem(id)}>remove</button>
          </div>

        )
      })}
      <button className="btn" onClick={()=>setPeople([])}>Clear items</button>

    </React.Fragment>
  );
};

export default UseStateAdvanced;
