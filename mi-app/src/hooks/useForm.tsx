import { ChangeEvent, useState } from "react";

//T es un generico
export const useForm = <T extends Object>(initState: T) => {

    const [formulario, setFormulario] = useState(initState);

    //Actualizando el input (email, name ....)
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,//Campos de formulario
            [name]: value //campo-name, value-dato_ingresado
        })};
    //Retorna un objeto 
    return {
        formulario,
        handleChange,
        ...formulario
    }
}