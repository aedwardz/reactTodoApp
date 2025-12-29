import { useState } from "react";

export default function TodoCard({ todo, removeTodo, editUtils }) {
  const { id, text, completed } = todo;


  const [isEdit, setIsEdit] = useState(false);

  const [editText, setEditText] = useState(text);

  const toggleCompletion = () => {
    editUtils.setTodoCompletion(id, !completed);
    
  };

  const setNewText = (e) => {
    e.preventDefault();
    editUtils.editTodoText(id, editText);
    setIsEdit(false);
  };

  return (
    <button
      className={completed ? "todoCard complete" : "todoCard"}
      onClick={() => {
        toggleCompletion();
      }}
    >
      {isEdit ? (
        <form onSubmit={setNewText}>
          <input
            className="editInput"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          ></input>
        </form>
      ) : (
        <div>{text}</div>
      )}
      <div>
        <button onClick={() => setIsEdit(!isEdit)}>edit</button>
        <button
          onClick={() => {
            removeTodo(id);
          }}
        >
          Delete
        </button>
      </div>
    </button>
  );
}
