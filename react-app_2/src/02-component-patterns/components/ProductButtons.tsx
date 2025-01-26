import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';


export const ProductButtons = () => {

    const { IncreaseBy, counter } = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>
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