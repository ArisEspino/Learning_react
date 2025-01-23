import { number } from "prop-types"
import { useReducer } from "react"

//Objeto, inicializar
const contador = {
    count: 0
}

//Definir los tipos de actions

type Action =
    | { type: "Incrementar" }
    | { type: 'Restar' }
    | { type: 'Reiniciar', payload: number };


//Definir cambio de estado (contador)

const reducer = (state: typeof contador, action: Action) => {
    switch (action.type) {
        case 'Incrementar':
            return {
                ...state,
                count: state.count + 1
            }
        case 'Restar':
            return {
                ...state,
                count: state.count - 1
            }
        case 'Reiniciar':
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
}

export const Contador = () => {

    const [state, dispatch] = useReducer(reducer, contador);

    return (

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Contador: {state.count}</h1>
            <button
                style={{ marginRight: '10px' }}
                className="btn btn-outline-primary"
                onClick={() => dispatch({ type: 'Incrementar' })}
            >
                Incrementar
            </button>
            <button
                style={{ marginRight: '10px' }}
                className="btn btn-outline-primary"
                onClick={() => dispatch({ type: 'Restar' })}
            >
                Restar
            </button>
            <button
                style={{ marginRight: '10px' }}
                className="btn btn-outline-danger"
                onClick={() => dispatch({ type: 'Reiniciar', payload: 0 })}
            >
                Reset
            </button>
            <input
                placeholder="Ingrese un numero">
            </input>


        </div>


    )
}
