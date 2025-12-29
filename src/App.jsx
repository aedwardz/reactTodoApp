import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoCollection from "./components/TodoCollection";

function App() {
 

  const [todos, setTodos] = useState([]);
  const [editConfig, setEditConfig] = useState({
    isEdit: false,
    id: null,
    text: null,
  });

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    console.log(`saved todos: ${storedTodos} `);
    setTodos(storedTodos ? JSON.parse(storedTodos) : []);
  }, []);

  useEffect(() => {
    if (todos.length) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const otherTodos = todos.filter((todo) => {
      return todo.id !== editConfig.id;
    });
    if (editConfig.isEdit) {
      console.log(`edit detected: ${editConfig.isEdit}`)
      const editedTodos = [
        { id: editConfig.id, text: editConfig.text, completed: false },
        ...otherTodos,
      ];
      setTodos(editedTodos);
    }
  }, [editConfig]);

  

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };

  const removeTodo = (deletedTodoId) => {
    console.log("Removing");
    setTodos(
      todos.filter((todo) => {
        return todo.id !== deletedTodoId;
      })
    );
    console.log(todos);
  };

  const countRemainingTodos = () => {
    let count = 0;
    for (let todo of todos){
      if (!todo.completed){
        count++;
      }
    }
    return count;
  };

   const editTodoText = (id, newText) => {
  console.log(`editing id: ${id} with edit text: ${newText}`);
  console.log(`todos before edit: ${todos}`)
  setTodos(todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, text: newText };
    }
    return todo;
  }))
      console.log(`todos after edit: ${todos}`)

}

  return (
    <>
      <TodoForm
        addTodo={addTodo}
        editConfig={editConfig}
        setEditConfig={setEditConfig}
      />
      {countRemainingTodos() > 0 && <p>{`${countRemainingTodos()} remaining todos`}</p> }
      <TodoCollection
        todos={todos}
        removeTodo={removeTodo}
        editTodoText={editTodoText}
      ></TodoCollection>
    </>
  );
}

export default App;
