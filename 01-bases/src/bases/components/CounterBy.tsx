
import { useState } from "react"
//import { number } from 'prop-types';


interface props {
    initialValue?: number;
}


interface CounterState {

    count: number;
    clicks: number;

}

export const CounterBy = ({ initialValue = 5 }: props) => {


    //Aqui destruturamos
    const [{count, clicks}, setCounterState] = useState<CounterState>({
        count: initialValue,
        clicks: 0
    })

    const handleChange = (value: number): void => {

        setCounterState(() => ({
            count: count + value,
            clicks: clicks + 1
        }));
    }


    return (
        <>
            <h3>CounterBy: {count}</h3>
            <h3>Click: {clicks}</h3>

            <button
                onClick={() => handleChange(1)}
                className="btn btn-outline-primary">
                +1
            </button>

            <button
                onClick={() => handleChange(5)}
                className="btn btn-outline-primary">
                +5
            </button>

        </>
    )
}
