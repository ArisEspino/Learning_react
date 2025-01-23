import { useReducer } from 'react';

interface CounterState {
    count: number,
    previous: number,
    changes: number
}

//Usando un tipado estricto
//Inicializando
const INITIAL_STATE: CounterState = {
    count: 0,
    previous: 0,//Mantener le estado  anterior
    changes: 0 //cuantos cambios
}

//Type

type Actions =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' };

//Va reproducir un nuevo estado
const counterReducer = (state: CounterState, action: Actions): CounterState => {

    switch (action.type) {

        case 'reset':
            return {
                count: 0,
                previous: 0,
                changes: 0
            }

        case 'increaseBy':
            return {
                ...state,
                count: state.count + action.payload.value,
                changes: state.changes + 1,
                previous: state.count
            }

        default:
            return state;
    }

}

export const CounterReducer = () => {

    const [{ count, changes, previous }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleChange = () => {
        dispatch({ type: 'reset', })
    }

    const increaseBy = (numero: number) => {
        dispatch({ type: 'increaseBy', payload: ({ value: numero }) })
    }

    return (
        <>
            <h3>CounterReducer: {count}</h3>

            <h6>Click: {changes}</h6>

            <h6>Estado anterior: {previous}</h6>

            <button
                onClick={() => increaseBy(1)}
                className="btn btn-outline-primary">
                +1
            </button>

            <button
                onClick={() => increaseBy(5)}
                className="btn btn-outline-primary">
                +5
            </button>

            <button
                onClick={() => increaseBy(10)}
                className="btn btn-outline-primary">
                +10
            </button>

            <button
                onClick={() => handleChange()}
                className="btn btn-outline-danger">
                Reset
            </button>
        </>
    )
}
