
import { useState } from "react"
import { number } from 'prop-types';



interface props {
    initialValue: number;
}

export const Counter = ({ initialValue }: props) => {

    const [count, setCounter] = useState(initialValue)

    const handleChange = (numero: number) => {
        setCounter(numero + count);
    }



    return (
        <>
            <h3>Counter_user: {count}</h3>

            <button
                onClick={() => handleChange(+1)}
                className="btn btn-outline-primary">
                +1
            </button>

            <button
                onClick={() => handleChange(-1)}
                className="btn btn-outline-primary">
                -1
            </button>

            <button
                onClick={() => setCounter(0)}
                className="btn btn-outline-primary">
                Reset
            </button>
        </>
    )
}
