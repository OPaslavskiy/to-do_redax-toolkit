// eslint-disable-next-line react/prop-types
function InputFiled({ handlerInput, handleSubmit, value }) {
  return (
    <label>
      <input value={value} onChange={(e) => handlerInput(e.target.value)} />
      <button onClick={handleSubmit}>Add task</button>
    </label>
  );
}

export default InputFiled;
