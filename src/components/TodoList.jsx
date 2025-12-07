import { useState } from "react";

export function TodoList({ todos }) {
  const [items, setItems] = useState(todos);

  function toggleCompleted(index) {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  }

  function removeCompleted() {
    const newItems = items.filter(item => !item.completed);
    setItems(newItems);
  }

  let listContent;

  if (items.length === 0) {
    listContent = (
      <li key="empty" className="todo-list__empty">
        No tasks yet. Add your first TODO above.
      </li>
    );
  } else {
    listContent = items.map((item, i) => (
      <li key={"todo-" + i} className="todo-item">
        <input
          type="checkbox"
          className="todo-item__checkbox"
          id={"todo-" + i}
          checked={item.completed}
          onChange={() => toggleCompleted(i)}
        />
        <label
          htmlFor={"todo-" + i}
          className={`todo-item__label ${item.completed ? "completed" : ""}`}
        >
          {item.text}
        </label>
      </li>
    ));
  }

  return (
    <section>
      <h2>My TODOs:</h2>
      <ul className="todo-list">{listContent}</ul>
      <button onClick={removeCompleted}>Remove Completed</button>
    </section>
  );
}
