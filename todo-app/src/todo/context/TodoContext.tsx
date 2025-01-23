
import { createContext } from "react";
import { Todo, TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
    todoState: TodoState
}


//Objeto vacio
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);