import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { useContext } from "react";



export interface props {
    img? : string;
    className? : string;
    style?: React.CSSProperties
}


//Creamos nuestros component
export const ProductImage = ({ img = '', className , style}:props) => {

    const { product } = useContext(ProductContext);

    let imgToShow: string;

    if (img) {
        imgToShow = img;
    }
    else if (product.img) {
        imgToShow = product.img
    }
    else {
        imgToShow = noImage
    }
    return (
        <img 
        style={style}
        className={`${styles.productImg} ${className}` } src={imgToShow} alt="Product" />
    )
}


