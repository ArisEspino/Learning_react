import { TodoList } from "./components/TodoList"
import { TodoProvide } from "./context/TodoProvide"


export const Todo = () => {
    return (
        <TodoProvide>
            <h1>Todo: </h1>
            <TodoList />
        </TodoProvide>
    )
}
