import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import React, { createContext, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

//Definimos el producto que va hacer de tipo Product es decir lo que contiene Product debe de cumplir lo que contiene
export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: React.CSSProperties
}

//useContext posee objetos
export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export const ProductCard = ({ product, children, className, style }: Props) => {

    const { counter, IncreaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            IncreaseBy,
            product
        }}>
            <div 
            style={style}
            className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>
    )
}

