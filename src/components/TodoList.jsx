/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodoCompleted, romoveTodo }) {
  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodoCompleted={toggleTodoCompleted}
          romoveTodo={romoveTodo}
          {...todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
