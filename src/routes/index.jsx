import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Home } from "../pages/Home"
import Menu from "../pages/Menu";
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
])