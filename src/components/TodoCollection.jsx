import TodoCard from "./TodoCard";

export default function TodoCollection({ todos, removeTodo, editUtils }) {

  console.log('TodoCollection received:', todos)
  return (
    <div className="todoCollection">
      {todos.map((todo) => {
        return (
          <TodoCard todo={todo} removeTodo={removeTodo} editUtils={editUtils}></TodoCard>
        );
      })}
    </div>
  );
}
