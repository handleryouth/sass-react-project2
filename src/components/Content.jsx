import { useState, useContext, useEffect } from "react";
import Media from "react-media";
import { themeContext } from "../App";
import { v4 as uuidv4 } from "uuid";
import Filter from "./Filter";
import Input from "./Input";
import List from "./List";

const LOCAL_TODO_LIST = "Todo-list";

export default function Content() {
  const [list, setList] = useState(todoSample);
  const [section, setSection] = useState("all");
  const { theme, setTheme } = useContext(themeContext);

  useEffect(() => {
    const localTodo = localStorage.getItem(LOCAL_TODO_LIST);
    if (localTodo != null) {
      setList(JSON.parse(localTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_TODO_LIST, JSON.stringify(list));
  }, [list]);

  function ChangingTheme() {
    setTheme((prevState) => !prevState);
  }

  const completeTodo = list.filter((i) => i.done === true);
  const activeTodo = list.filter((i) => i.done === false);

  return (
    <div className={`content ${theme ? "darktheme" : "whitetheme"}`}>
      <div className="content__container">
        <div className="content__container--title">
          <h1>TODO</h1>
          {theme ? (
            <img
              onClick={ChangingTheme}
              src="/images/icon-sun.svg"
              alt="Light Mode"
            />
          ) : (
            <img
              onClick={ChangingTheme}
              src="/images/icon-moon.svg"
              alt="dark mode"
            />
          )}
        </div>

        <div className="content__container--input shadow">
          <Input setList={setList} />
        </div>

        <div className="content__container--list-container shadow">
          <div
            className={`content__container--list ${
              theme ? "darktheme" : "whitetheme"
            }`}
          >
            {section === "all"
              ? list.map((i) => {
                  return <List key={i.id} {...i} setList={setList} />;
                })
              : section === "active"
              ? activeTodo.map((i) => {
                  return <List key={i.id} {...i} setList={setList} />;
                })
              : completeTodo.map((i) => {
                  return <List key={i.id} {...i} setList={setList} />;
                })}
          </div>

          <div
            className={`content__container--filter ${
              theme ? "darktheme" : "whitetheme"
            }`}
          >
            <Filter
              list={list}
              setSection={setSection}
              section={section}
              setList={setList}
            />
          </div>
        </div>

        <Media query="(max-width: 768px)">
          {(matches) =>
            matches ? (
              <div
                className={`content__container--mobile-section shadow content__container--filter ${
                  theme ? "darktheme" : "whitetheme"
                }`}
              >
                <button
                  style={
                    section === "all" ? { color: "hsl(220, 98%, 61%)" } : null
                  }
                  className="filter__button filter__button--all"
                  onClick={(e) => setSection(e.target.value)}
                  value="all"
                >
                  All
                </button>
                <button
                  style={
                    section === "active"
                      ? { color: "hsl(220, 98%, 61%)" }
                      : null
                  }
                  className="filter__button filter__button--active"
                  onClick={(e) => setSection(e.target.value)}
                  value="active"
                >
                  Active
                </button>
                <button
                  style={
                    section === "complete"
                      ? { color: "hsl(220, 98%, 61%)" }
                      : null
                  }
                  className="filter__button filter__button--complete"
                  onClick={(e) => setSection(e.target.value)}
                  value="complete"
                >
                  Completed
                </button>
              </div>
            ) : (
              ""
            )
          }
        </Media>
      </div>
      <span className="content__container--clue">
        Drag and drop to reorder list
      </span>
    </div>
  );
}

const todoSample = [
  {
    id: uuidv4(),
    name: "Complete online Javascript course",
    done: false,
  },
  {
    id: uuidv4(),
    name: "Jog around the park 3x",
    done: false,
  },
  {
    id: uuidv4(),
    name: "10 minutes meditation",
    done: false,
  },
  {
    id: uuidv4(),
    name: "Read for 1 hour",
    done: false,
  },
  {
    id: uuidv4(),
    name: "Pick up groceries",
    done: false,
  },
  {
    id: uuidv4(),
    name: "Complete Todo App on Frontend Mentor",
    done: false,
  },
];
