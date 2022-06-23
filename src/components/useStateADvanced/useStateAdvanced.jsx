import React, { useState } from "react";
import { data } from "../data";


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
  return (
    <React.Fragment>
      
      {people.map((person)=>{
        const {id,name} = person;
        return(
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={()=> removeItem(id)}>remove</button>
          </div>

        )
      })}
      <button className="btn" onClick={()=>setPeople([])}>Clear items</button>

    </React.Fragment>
  );
};

export default UseStateAdvanced;
