import { createBrowserRouter } from "react-router-dom";

import { Cart, Home, Login, Menu, Register } from "../pages"
import { Header } from "../components/Header";


export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home />
            </>
        ),
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header />
                <Menu />
            </>
        )
    },
    {
        path: '/Carrinho',
        element: <Cart />,
    },
])