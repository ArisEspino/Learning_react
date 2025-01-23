import logo from '../logo.svg'
import { BrowserRouter, NavLink,  Route, Routes } from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';



export const Navigation = () => {
    return (
        <BrowserRouter >
            <div className="main-layout">
                <nav>
                    <img src={logo} alt='React Logo' />
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>User</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/users" element={<h1>User</h1>} />
                    <Route path="/" element={<h1><ShoppingPage/></h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
