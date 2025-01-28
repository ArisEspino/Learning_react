import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';


export interface props {
    className? : string;
    style?: React.CSSProperties
}

export const ProductButtons = ({className, style}:props) => {

    const { IncreaseBy, counter } = useContext(ProductContext);

    return (
        <div 
        style={style}
        className={`${styles.buttonsContainer} ${className}`}>
            <button
                onClick={() => IncreaseBy(-1)}
                className={styles.buttonMinus}>
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                onClick={() => IncreaseBy(+1)}
                className={styles.buttonAdd}>+</button>
        </div>
    );
}