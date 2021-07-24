import { useMemo } from "react";
export default function Filter({ list, setSection, section, setList }) {
  function ClearCompleted() {
    setList((prevState) => prevState.filter((i) => !i.done));
  }

  const countFalse = useMemo(
    () => list.reduce((count, item) => (!item.done ? (count += 1) : count), 0),
    [list]
  );

  return (
    <>
      <div>
        <span>
          {countFalse > 1
            ? `${countFalse} items left`
            : `${countFalse} item left`}
        </span>
      </div>

      <div>
        <button
          style={section === "all" ? { color: "hsl(220, 98%, 61%)" } : null}
          className="filter__button filter__button--all"
          onClick={(e) => setSection(e.target.value)}
          value="all"
        >
          All
        </button>
        <button
          style={section === "active" ? { color: "hsl(220, 98%, 61%)" } : null}
          className="filter__button filter__button--active"
          onClick={(e) => setSection(e.target.value)}
          value="active"
        >
          Active
        </button>
        <button
          style={
            section === "complete" ? { color: "hsl(220, 98%, 61%)" } : null
          }
          className="filter__button filter__button--complete"
          onClick={(e) => setSection(e.target.value)}
          value="complete"
        >
          Completed
        </button>
      </div>

      <div>
        <button
          className="filter__button filter__button--clear"
          onClick={ClearCompleted}
        >
          Clean Completed
        </button>
      </div>
    </>
  );
}
