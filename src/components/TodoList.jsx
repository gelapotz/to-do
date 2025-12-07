export function TodoList(props) {
  let listContent;

  if (props.todos.length === 0) {
    listContent = (
      <li key="empty" className="todo-list__empty">
        No tasks yet. Add your first TODO above.
      </li>
    );
  } else {
    listContent = props.todos.map((item, i) => (
      <li key={"todo-" + i} className="todo-item">
        <input
          type="checkbox"
          className="todo-item__checkbox"
          id={"todo-" + i}
        />
        <label htmlFor={"todo-" + i} className="todo-item__label">
          {item.text}
        </label>
      </li>
    ));
  }

  return (
    <section>
      <h2>My TODOs:</h2>
      <ul className="todo-list">{listContent}</ul>
      <button>Remove Completed</button>
    </section>
  );
}
