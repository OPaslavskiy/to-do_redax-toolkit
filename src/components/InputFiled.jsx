function InputFiled({ handlerInput, handleSubmit, text }) {
  return (
    <label>
      <input value={text} onChange={(e) => handlerInput(e.target.value)} />
      <button onClick={handleSubmit}>Add todo</button>
    </label>
  );
}

export default InputFiled;
