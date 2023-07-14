/* eslint-disable react/prop-types */

function TodoItem({ id, completed, text, toggleTodoCompleted, romoveTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCompleted(id)}
      />
      <p>{text}</p>
      <span onClick={() => romoveTodo(id)}>&times;</span>
    </li>
  );
}

export default TodoItem;
