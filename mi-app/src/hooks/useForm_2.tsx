import { ChangeEvent, useState } from 'react';

export const useForm_2 = <T extends Object>(initState: T) => {

    const [formulario, setFormulario] = useState(initState);

    //Actualizando el input mientras inserta datos a tiempo real.
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [name]:value
        })};
    return {
        formulario,
        handleChange,
        ...formulario
    }
}
