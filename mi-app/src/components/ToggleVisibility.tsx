import { useState } from "react"


export const ToggleVisibility = () => {

    const [visible, setVisible] = useState<boolean>();

    const change = (confirmar: boolean) => {
        setVisible(confirmar)
    }



    return (
        <>
            <h1>Ocultar componente</h1>

            <button 
            onClick={() => change(true)}
            className="btn btn-outline-primary">
                Mostrar
            </button>
            <button 
            onClick={() => change(false)}
            className=" btn btn-outline-primary">
                Ocultar
            </button>


            { 
            (!visible)

                ?<h3> </h3>
                :<h3>Melanie</h3>
            }



        </>
    )
}
