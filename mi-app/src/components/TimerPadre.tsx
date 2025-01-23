import { useState } from "react";
import { Timer } from "./Timer";


export const TimerPadre = () => {
    const [mili, setMili] = useState(1000);
    return (
        <>
            <span>Milisegundos{mili}</span>
            <br />
            <button
                onClick={() => setMili(1000)}
                className="btn btn-outline-success">
                1000
            </button>
            <button
                onClick={() => setMili(10)}
                className="btn btn-outline-success">
                2000
            </button>
            <Timer mili = {mili}/>
        </>
    )
}
