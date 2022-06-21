import React,{useState} from "react";
const Counter = () => {
    const [counter,setCounter] = useState(0)

    const increment = () =>{
        setCounter(counter + 1)
    } 
    const decrement = () =>{
        setCounter(counter - 1)
    } 

    return(
        <div>
            <p className="counter">{counter}</p>
            <button className="book__card-btn increment__btn" onClick={increment}>Increment</button>
            <button className="book__card-btn decrement__btn" onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter;