import TodoCard from "./TodoCard";

export default function TodoCollection({ todos, removeTodo }) {

  console.log('TodoCollection received:', todos)
  return (
    <div className="todoCollection">
      {todos.map((todo) => {
        return (
          <TodoCard id={todo.id}text={todo.text} completed={todo.completed} removeTodo={removeTodo}></TodoCard>
        );
      })}
    </div>
  );
}
