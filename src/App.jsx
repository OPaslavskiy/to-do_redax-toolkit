import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import "./App.css";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

import TodoList from "./components/TodoList";
import InputFiled from "./components/InputFiled";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <Layout>
      <GlobalStyle />
      <InputFiled
        handlerInput={setText}
        handleSubmit={handleAction}
        value={text}
      />
      <TodoList />
    </Layout>
  );
}

export default App;
