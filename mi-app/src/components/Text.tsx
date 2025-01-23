import { useState } from "react"


export const Text = () => {

    const [text, setText] = useState<string>();

    const change = (world: string) => {
        setText(world)

    }


    return (
        <>
            <h3>Altenar Texto</h3>
            <button
                onClick={() => change('Hola')}
                className="btn btn-outline-primary">
                Hola
            </button>

            <button 
            onClick={() => change('Adios')}
            className="btn btn-outline-primary">
                Adios
            </button>
            <pre>{JSON.stringify(text)}Melanie</pre>

        </>
    )
}
