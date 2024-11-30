import { UserCircleCheck, ShoppingCartSimple } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext"

import { Container, Navigate, HeaderLink, Options, Profile, Logout, LinkContainer, Content } from "./style";
export function Header() {
    const navigate = useNavigate()
    const { logout, userInfo } = useUser()

    const { pathname } = useResolvedPath()

    function logoutUser() {
        logout()
        navigate("/login")
    }

    return (
        <Container>
            <Content>
                <Navigate>
                    <div>
                        <HeaderLink to={"/"} $isActive={pathname === "/"}>Home</HeaderLink>
                        <hr></hr>
                        <HeaderLink to={"/cardapio"} $isActive={pathname === "/cardapio"}>Cardápio</HeaderLink>
                    </div>
                </Navigate>
                <Options>
                    <Profile>
                        <UserCircleCheck size={28} color="#00ff00" />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span></p>
                        </div>
                        <Logout onClick={logoutUser}>Sair</Logout>
                    </Profile>
                    <LinkContainer>
                        {/* <ShoppingCartSimple size={26} color="#fff" /> */}
                        <HeaderLink to={"/carrinho"}>
                            <ShoppingCartSimple size={26} color="#fff" />
                        </HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    )
}