import { useDispatch } from "react-redux";
import { toggleTodoCompleted, removeTodo } from "../store/todoSlice";

// eslint-disable-next-line react/prop-types
function TodoItem({ id, completed, text }) {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted({ id }))}
      />
      <p>{text}</p>
      <span onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
    </li>
  );
}

export default TodoItem;
