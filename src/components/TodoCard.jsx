import { useState } from "react";

export default function TodoCard({id, text, completed, removeTodo}){
    const [completion, setCompletion] = useState(completed);

    const toggleCompletion = () => {
        setCompletion(!completion)
    }
    return(
        <button className={completion ? "todoCard complete" : "todoCard"}
            onClick={() => {toggleCompletion()}}>

            <div>{text}</div>
            <button
            onClick={() => {removeTodo(id)}}>Delete</button>
          </button>
    )
}