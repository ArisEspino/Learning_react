import { useEffect, useState } from 'react'

export const Reloj = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval)
    }, [])


    return (
        <div style={{ textAlign: 'center', fontSize: "24px", marginTop: "20px" }}>

            <h3>Reloj Digital</h3>
            <p>{time}</p>

        </div>
    )
}
