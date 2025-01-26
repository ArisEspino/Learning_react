import { ProductCard } from "../components/index"



//Ahora rellenamos lo que interface Product contiene 
export const product = {
    id: '1',
    title: 'Coffee',
    img: './coffee-mug.png' 

}


export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title title={'Coffee'} />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductCard.Image  />
                    <ProductCard.Title title={'Wii'} />
                    <ProductCard.Buttons />
                </ProductCard>

            </div>

        </div>
    )
}
