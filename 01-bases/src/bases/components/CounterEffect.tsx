import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';


const MAX_COUNT = 10;

export const CounterEffect = () => {

    const [count, setCounter] = useState(5);

    const counterElement = useRef<HTMLHeadingElement>(null);


    const handleChange = (numero: number) => {
        setCounter(Math.min(count + numero, MAX_COUNT));
    }
    useEffect(() => {

        //if (count < 10) return;

        //console.log("%cSe llego al valor maximo", "color:red; background-color: black")

        const tl = gsap.timeline();

        //tl controlador de tiempo
        tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'elastic.out' })
            .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })


    }, [count])


    return (
        <>
            <h3>CounterEffect</h3>
            <h2 ref={counterElement}>{count}</h2>
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
