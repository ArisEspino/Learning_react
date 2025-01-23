import { useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const incrementar = (numero: number) => {
        setCounter(numero + counter);
    }

    return (
        <div className="mt-5">
            <h2>Contador: {counter}</h2>
            <button
                onClick={() => incrementar(1)}
                className="btn btn-outline-primary">
                +1
            </button>
            <br />
            <button
                onClick={() => incrementar(-1)}
                className="btn btn-outline-primary">
                -1
            </button>
            <br />
            <button
                onClick={() => setCounter(0)}
                className="btn btn-outline-danger">
                Reset
            </button>
        </div>
    )
}
