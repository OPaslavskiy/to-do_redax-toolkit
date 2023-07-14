/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodoCopmpleted, romoveTodo }) {
  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodoCopmpleted={toggleTodoCopmpleted}
          romoveTodo={romoveTodo}
          {...todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
