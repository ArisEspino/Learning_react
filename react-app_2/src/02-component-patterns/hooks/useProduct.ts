import { useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: useProductArgs) => {

    const [counter, setCounter] = useState(0);

    const IncreaseBy = (value: number) => {

        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);
        onChange && onChange({ count : newValue, product});//Si es undefine no se va ejecutar caso contrario se ejecuta
    }
    return {
        counter,
        IncreaseBy
    }
}
