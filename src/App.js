import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  const [item, setItem] = React.useState({
    title: "",
    description: "",
  });
  function handlechnage(event) {
    const { name, value } = event.target;
    setItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(item);
  }

  function addItem(event) {
    event.preventDefault();
    const newItem = {
      title: item.title,
      description: item.description,
    };
    axios.post("/newItem", newItem);
    console.log(newItem);
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <input
        onChange={handlechnage}
        value={item.title}
        name="title"
        placeholder="title"
      ></input>
      <input
        onChange={handlechnage}
        value={item.description}
        name="description"
        placeholder="description"
      ></input>
      <button onClick={addItem}>Add Items</button>
    </div>
  );
}

export default App;
