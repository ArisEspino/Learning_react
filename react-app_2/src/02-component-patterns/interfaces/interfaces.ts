import { props as ButtonProps} from '../components/ProductButtons';
import { Props as ProductCardProps, Props } from '../components/ProductCard';
import { props as ImageProps} from '../components/ProductImage';
import { props as TitleProps} from '../components/ProductTitle';



//Definir lo que deseamos colocar en el card

export interface Product {
    id: string;
    title: string;
    img?: string;
    className?: string;
}

//Interface definir el context

export interface ProductContextProps {
    counter: number;
    IncreaseBy: (value: number) => void;
    product: Product;
    className?: string
}


export interface ProductCardHOCProps {

    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: TitleProps) => JSX.Element,
    Image: (Props: ImageProps) => JSX.Element,
    Buttons: (Props: ButtonProps) => JSX.Element

}

export interface onChangeArgs {
    product: Product;
    count: number;
}