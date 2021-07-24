export default function List(props) {
  const { id, name, done, setList } = props;

  function HandleDelete(id) {
    setList((prevState) => prevState.filter((i) => i.id !== id));
  }

  function HandleDone(id) {
    setList((prevState) =>
      prevState.map((i) => (i.id === id ? { ...i, done: !i.done } : i))
    );
  }

  return (
    <div className="list">
      <div className="round">
        <input
          onChange={(e) => {
            HandleDone(e.target.id);
          }}
          className="checkbox"
          defaultChecked={done}
          type="checkbox"
          id={id}
        />

        <label id={id} htmlFor={id} />
      </div>

      <div className="list__text">
        <span>{name}</span>
        <button
          id={id}
          onClick={(e) => {
            HandleDelete(e.target.id);
          }}
          className="list__button"
        >
          &times;
        </button>
      </div>


    </div>
  );
}
