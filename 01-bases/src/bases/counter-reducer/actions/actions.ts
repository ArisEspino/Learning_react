//Type
export type Actions =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' };

//Actions creators
export const doReset = (): Actions => ({
    type: 'reset'
})
//Regresa un objeto

//Segunda accion
export const doIncreaseBy = (numero: number): Actions => ({
    type: 'increaseBy', payload: {value: numero}
})