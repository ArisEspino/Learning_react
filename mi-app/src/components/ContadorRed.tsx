
import { useReducer } from "react"


//inicializar estado no se modifica
const initialState = {
    contador: 0
}
//Crear el tipo de la action es decir las  action del estado
type ActionType =
    | { type: 'incrementar' }
    | { type: 'descrementar' }
    | { type: 'custom', payload: number };

//cambiar el estado
const contadorReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1 //instanciar la variable
            }
        case 'descrementar':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return {
                    ...state,
                    contador : action.payload
                }
        default:
            return state;
    }
}

export const ContadorRed = () => {

    const [Contador_state, dispatch] = useReducer(contadorReducer, initialState);
    return (
        <>
            <h2>Contador: {Contador_state.contador}</h2>

            <button
                onClick={() => dispatch({ type: 'incrementar' })}
                className="btn btn-outline-primary">
                +1
            </button>

            <button
                onClick={() => dispatch({ type: 'descrementar' })}
                className="btn btn-outline-primary">
                -1
            </button>

            <button
                onClick={() => dispatch({ type: 'custom', payload: 100})}
                className="btn btn-outline-danger">
                100
            </button>
        </>
    )
}
