import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext} from 'react';
import { ProductContextProps, Props } from '../interfaces/interfaces';


//useContext posee objetos
export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export const ProductCard = ({ product, children }: Props) => {

    const { counter, IncreaseBy } = useProduct();

    return (

        <Provider value={{
            counter,
            IncreaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>

    )
}

