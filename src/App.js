import "./App.css";
import AddNewBook from "./components/addNewBook";
import Books from "./components/books";
import ChildrenProp from "./components/ChildrenProp";


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
      <AddNewBook/>
      <div className="book__wrapper">
        {firstBook.map((books, index) => {
          return (
            <Books
              img={books.img}
              title={books.title}
              author={books.author}
              key={index}
            />
          );
        })}
      </div>
      <br/>
      <ChildrenProp>
        About Us
      </ChildrenProp>
      <ChildrenProp children={"Contact"} />        
    </div>
  );
}

export default App;
