import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { themeContext } from "../App";

export default function Input({ setList }) {
  const [inputValue, setInputValue] = useState("");
  const { theme } = useContext(themeContext);

  function InputChange(e) {
    setInputValue(e.target.value);
  }

  function HandleAdd(e) {
    const todoTemplate = {
      id: uuidv4(),
      name: e,
      done: false,
    };
    setList((prevState) => [...prevState, todoTemplate]);
  }

  return (
    <div className={`input--container ${theme ? "darktheme" : "whitetheme"}`}>
      <div className="round">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox"></label>
      </div>

      <input
        onChange={InputChange}
        type="text"
        placeholder="Create a new todo"
        className="input--container__input"
      />
      <button
        className="input--container__button"
        onClick={(e) => HandleAdd(e.target.value)}
        value={inputValue}
      >
        Add
      </button>
    </div>
  );
}
