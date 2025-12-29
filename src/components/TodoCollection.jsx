import TodoCard from "./TodoCard";

export default function TodoCollection({ todos, removeTodo, editTodoText }) {

  console.log('TodoCollection received:', todos)
  return (
    <div className="todoCollection">
      {todos.map((todo) => {
        return (
          <TodoCard todo={todo} removeTodo={removeTodo} editTodoText={editTodoText}></TodoCard>
        );
      })}
    </div>
  );
}
