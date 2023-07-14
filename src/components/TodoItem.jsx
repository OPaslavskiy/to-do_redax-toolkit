/* eslint-disable react/prop-types */

function TodoItem({ id, completed, text, toggleTodoCopmpleted, romoveTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCopmpleted(id)}
      />
      <p>{text}</p>
      <span onClick={() => romoveTodo(id)}>&times;</span>
    </li>
  );
}

export default TodoItem;
