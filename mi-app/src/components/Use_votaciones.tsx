//Haciendo las votaciones pero con el useReducer

import { useReducer, useState } from "react";

export const Use_votaciones = () => {
    //Mis estados iniciales aqui las inicializamos
    const initialState = {
        red: 0,
        blue: 0,
        green: 0
    }
    //Ahora creamos el tipo de acciones
    type Action =
        | { type: 'red' }
        | { type: 'blue' }
        | { type: 'green' };

    //Cambiar el estado

    const contadorReducer = (state: typeof initialState, action: Action) => {
        return {
            ...state,
            [action.type]: state[action.type] + 1
        }
    }

    const [Contador_state, dispatch] = useReducer(contadorReducer, initialState);


    const [lastVote, setLastVote] = useState(false);

    const handleVote = (color: 'red' | 'blue' | 'green') => {

        if (!lastVote) {
            dispatch({ type: color });
            setLastVote(true);
        }

        else {
            alert("Ya has votado")
        }


    }

    return (
        <>
            <h5>Votaciones con useReducer</h5>
            <h4>¿Cuál es tu color favorito?</h4>
            <button
                onClick={() => handleVote('red')}
                className="btn btn-outline-danger">
                Red
            </button>
            <button
                onClick={() => handleVote('blue')}
                className="btn btn-outline-primary">
                Blue
            </button>
            <button
                onClick={() => handleVote('green')}
                className="btn btn-outline-success">
                Green
            </button>

            <hr />
            <small>Red:{Contador_state.red}</small>
            <br />
            <small>Blue:{Contador_state.blue}</small>
            <br />
            <small>Green:{Contador_state.green}</small>
        </>
    )
}
