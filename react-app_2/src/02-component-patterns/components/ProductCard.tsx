import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';


export const ProductCard = () => {

    const {counter, IncreaseBy} = useProduct();

    return (
        <div className={styles.productCard}>
            {/*<img className={styles.productImg} src={noImage} alt="Coffee Mug" /> */}
            <img className={styles.productImg} src={'./coffee-mug.png'} alt="Coffee Mug" />
            <span className={styles.productDescription}>Coffee Mug</span>
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

        </div>
    )
}
