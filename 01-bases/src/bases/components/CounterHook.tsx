import { useCounter } from "../hooks/useCounter"


export const CounterHook = () => {

    const { count, handleChange, elementToAnimate, setCounter } = useCounter({
        maxCount: 10
    });

    return (
        <>
            <h3>CounterHook</h3>
            <h2 ref={elementToAnimate}>{count}</h2>
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
