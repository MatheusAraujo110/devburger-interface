import { Route, Routes } from "react-router-dom";
import { Cart, Home, Login, Menu, Register, Checkout, CompletePayment, Orders, NewProducts, EditProducts, Products } from "../pages"
import { UserLayout } from "../layouts/UserLayout"
import { AdminLayout } from "../layouts/AdminLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>  // UserLayout é um componente que contém o Header e o Footer é apenas em todas as telas que preica deles.
                <Route path="/" element={<Home />} />
                <Route path="/cardapio" element={<Menu />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/complete" element={<CompletePayment />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/pedidos" element={<Orders />} />
                <Route path="/admin/novo-produtos" element={<NewProducts />} />
                <Route path="/admin/editar-produtos" element={<EditProducts />} />
                <Route path="/admin/produtos" element={<Products />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
        </Routes>
    )
}