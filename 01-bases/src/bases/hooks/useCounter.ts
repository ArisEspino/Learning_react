import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';


export const useCounter = ({ maxCount = 1 }) => {

    const [count, setCounter] = useState(0);
    //Para usar el useRef mayormente sera en null
    const elementToAnimate = useRef<any>(null);

    const tl = useRef(gsap.timeline());


    const handleChange = (numero: number) => {
        setCounter(Math.min(count + numero, maxCount));
    }

    useLayoutEffect(() => {
        if (!elementToAnimate.current) return;
        //tl controlador de tiempo
        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'elastic.out' })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
            .pause();
    }, [])

    useEffect(() => {
        //Solo se encarga de reproducir la animacion
        //if (count < maxCount) return;
        tl.current.play(0);

    }, [count])


    return {
        count,
        elementToAnimate,
        handleChange,
        setCounter
    }

}