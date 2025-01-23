import { useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';
import * as CounterActions from './actions/actions';


//Usando un tipado estricto
//Inicializando
const INITIAL_STATE: CounterState = {
    count: 0,
    previous: 0,//Mantener le estado  anterior
    changes: 0 //cuantos cambios
}

export const CounterReducer = () => {

    const [{ count, changes, previous }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleChange = () => {
        dispatch(CounterActions.doReset())
    }

    const increaseBy = (numero: number) => {
      dispatch(CounterActions.doIncreaseBy(numero));
    }

    return (
        <>
            <h3>CounterReducer Segmentado: {count}</h3>

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
