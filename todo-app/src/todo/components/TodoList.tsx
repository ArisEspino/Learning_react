import { useContext } from "react"
import { TodoProvide } from "../context/TodoProvide"
import { TodoContext } from "../context/TodoContext"
import { TodoItems } from "./TodoItems";


export const TodoList = () => {

    const { todoState } = useContext(TodoContext);
    const { todos } = todoState;
    console.log(todoState)
    return (
        <ul>
            {todos.map(todo => <TodoItems key={k} todo ={todo} />)}


        </ul>
    )
}
