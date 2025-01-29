import { useState } from "react";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/index"
import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css';

//Ahora rellenamos lo que interface Product contiene 
const product1 = {
    id: '1',
    title: 'Coffee',
    img: './coffee-mug.png'
}
const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}
//Unimos los dos products en un arreglo que es de tipo Product
const products: Product[] = [product1, product2];

//Voy a extender mi Product add un nuevo atributo (count) mi interface se llama ProductInCart 
interface ProductInCart extends Product {
    count: number
}

export const ShoppingPage = () => {

    //Say mi useState sera un objeto que reciba los atributos de Product pasando como tipo de dato mi interface ProductInCart
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    //show count
    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        console.log('onProductCountChange', count, product);
    }
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {products.map(productos => (
                    <ProductCard
                        key={productos.id}
                        product={productos}
                        className="bg-dark"
                        onChange={(e) => onProductCountChange(e)}
                    >
                        <ProductImage
                            className="custom-image"
                        />
                        <ProductTitle
                            title={'Coffee'}
                            className="text-white"
                        />
                        <ProductButtons
                            className="custom-buttons"
                        />
                    </ProductCard>
                ))}

                <div className="shopping-cart">
                    <ProductCard
                        product={product2}
                        className="bg-dark"
                        style={{
                            width: '100px'
                        }}
                    >

                        <ProductImage
                            className="custom-image"
                        />
                        <ProductButtons
                            className="custom-buttons"
                        />
                    </ProductCard>


                    <ProductCard
                        product={product1}
                        className="bg-dark"
                        style={{
                            width: '100px'
                        }}>
                        <ProductImage
                            className="custom-image"
                        />
                        <ProductButtons
                            className="custom-buttons"
                        />
                    </ProductCard>
                </div>
            </div>
        </div >
    )
}
