import { ReactElement } from "react";

//Definimos el producto que va hacer de tipo Product es decir lo que contiene Product debe de cumplir lo que contiene
export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
}

//Definir lo que deseamos colocar en el card

export interface Product {
    id: string;
    title: string;
    img?: string;
}


//Interface definir el context

export interface ProductContextProps {
    counter: number;
    IncreaseBy: (value: number) => void;
    product: Product;
}


export interface ProductCardHOCProps {

    ({ children, product }: Props): JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () =>  JSX.Element

}