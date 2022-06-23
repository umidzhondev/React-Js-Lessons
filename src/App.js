import "./App.css";

import UseStateAdvanced from "./components/useStateADvanced/useStateAdvanced";
import UseStateObject from "./components/useStateADvanced/useStateObject";


function App() {
  const firstBook = [
    {
      img: "https://loremflickr.com/320/241",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/242",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/243",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/244",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/245",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/246",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/247",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/248",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/249",
      title: "Atomic Habits",
      author: "James Clear",
    },
  ];

  return (
    <div className="container">
        <UseStateAdvanced/>
        <UseStateObject/> 
    </div>
  );
}

export default App;
