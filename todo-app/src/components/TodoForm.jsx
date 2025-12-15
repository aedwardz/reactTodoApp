import { useState } from "react";


export default function TodoForm({addTodo}) {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
    const todo = {
      id: Date.now(),
      text: inputText,
      completed: false
    }
    addTodo(todo)
    setInputText('')
  }
  
  
  return (
    <form className="mainForm" onSubmit={handleSubmit}>
      <input
        value={inputText}
        onChange={(e) => {setInputText(e.target.value)}}
      />
      <button type="submit">
        Create todo
      </button>
     

    </form>
  );
}
