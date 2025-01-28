import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/index"
import '../styles/custom-styles.css';


//Ahora rellenamos lo que interface Product contiene 
export const product = {
    id: '1',
    title: 'Coffee',
    img: './coffee-mug.png'

}


export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {/*Forma 1 de usar */}
                <ProductCard
                    className="bg-dark"
                    product={product} >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title
                        title={'Coffee'}
                        className="text-white"
                    />
                    <ProductCard.Buttons
                        className="custom-buttons"
                    />
                </ProductCard>
                {/*Forma 2 de usar */}
                <ProductCard
                    product={product}
                    className="bg-dark">

                    <ProductImage
                        className="custom-image"
                    />
                    <ProductTitle
                        title={'Wii'}
                        className="text-white"
                    />
                    <ProductButtons
                        className="custom-buttons"
                    />
                </ProductCard>

                {/*Usar directamente los styles y/o junto con el className */}

                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: 'cyan'
                    }}
                >
                    <ProductImage
                        style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                        }}

                    />
                    <ProductTitle
                        style={{ color: "pink" }}
                        title={'Robux'} />
                    <ProductButtons
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    />
                </ProductCard>

            </div>

        </div>
    )
}
