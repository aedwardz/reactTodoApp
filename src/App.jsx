import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoCollection from './components/TodoCollection'

function App() {
 
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos")
    console.log(`saved todos: ${storedTodos} `)
    setTodos(storedTodos ? JSON.parse(storedTodos) : [])
  }, [])

  useEffect(() => {
    if (todos.length)
      localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos)
  }

  const removeTodo = (deletedTodoId) => {
    console.log("Removing")
    setTodos(todos.filter((todo) => {
      return todo.id !== deletedTodoId
    }))
      console.log(todos)

  }


  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoCollection todos={todos} removeTodo={removeTodo}></TodoCollection>
      
    </>
  )
}

export default App
