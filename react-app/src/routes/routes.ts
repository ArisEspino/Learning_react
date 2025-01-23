import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import LazyPage1 from '../01-lazyload/pages/LazyPage1';

//Definir type
type JSXComponent = () => JSX.Element;

//Vamos a crear rutas dinamicas
interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string
}

//Component: JSX.element

//Componentes - lazy metodo, carga lenta
const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));
//const LazyPage1 = lazy(() => import('../01-lazyload/pages/LazyPage1'))


export const routes: Route[] = [
    {
        to: '/lazyload/lazy1',
        path: '/lazyload/*',//especificar con el comodin
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: '/no-lazy/*',
        Component: NoLazy,
        name: 'No lazy'
    },

]