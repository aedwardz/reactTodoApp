import { useState } from "react";


export default function TodoForm({addTodo, editConfig, setEditConfig}) {
  const [inputText, setInputText] = useState('')
  const [isEmptyTodo, setIsEmptyTodo] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (inputText === ''){
      setIsEmptyTodo(true)
    }
    else{
      if (editConfig.isEdit){
        let editConfigCopy = structuredClone(editConfig);
        editConfigCopy.text = inputText
        setEditConfig(editConfigCopy)
      }
    const todo = {
      id: Date.now(),
      text: inputText,
      completed: false
    }
    addTodo(todo)
    setInputText('')}
  }
    
  return (
    <form className="mainForm" onSubmit={handleSubmit}>
      <input
        value={editConfig.isEdit ? editConfig.text : inputText}
        onChange={(e) => {setInputText(e.target.value)}}
      />
      <button type="submit">
        Create todo
      </button>
      <p color="red">{isEmptyTodo ? "Please enter text for todo first!":""}</p>
     

    </form>
  );
}
