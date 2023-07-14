import { nanoid } from "nanoid";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { useState } from "react";

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

  return (
    <Layout>
      <GlobalStyle />
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add todo</button>
      </label>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            <p>{todo.text}</p>
            <span>&times;</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default App;
