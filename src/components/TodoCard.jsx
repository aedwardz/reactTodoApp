import { useState } from "react";

export default function TodoCard({ todo, removeTodo, editTodoText }) {
  const { id, text, completed } = todo;

  const [completion, setCompletion] = useState(completed);

  const [isEdit, setIsEdit] = useState(false);

  const [editText, setEditText] = useState(text);

  const toggleCompletion = () => {
    setCompletion(!completion);
  };

  const setNewText = (e) => {
    e.preventDefault();
    editTodoText(id, editText);
    setIsEdit(false);
  };

  return (
    <button
      className={completion ? "todoCard complete" : "todoCard"}
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
