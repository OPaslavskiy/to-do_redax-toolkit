import { nanoid } from "nanoid";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { useState } from "react";
import TodoList from "./components/TodoList";
import InputFiled from "./components/InputFiled";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: nanoid(),
          text,
          completed: false,
        },
      ]);
    }
  };

  const romoveTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoCompleted = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <Layout>
      <GlobalStyle />
      <InputFiled handlerInput={setText} handleSubmit={addTodo} text={text} />
      <TodoList
        todos={todos}
        toggleTodoCompleted={toggleTodoCompleted}
        romoveTodo={romoveTodo}
      />
    </Layout>
  );
}

export default App;
