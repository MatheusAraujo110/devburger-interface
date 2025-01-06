import { navLinks } from './navLinks'

import Logo from "../../assets/Logo 1.svg"
import { SignOut } from '@phosphor-icons/react'

import { useUser } from "../../hooks/UserContext"
import { Container, Footer, NavLinkContainer, NavLink } from './style'
import { useResolvedPath } from 'react-router-dom'

export function SideNavAdmin() {
    const { logout } = useUser()
    const { pathname } = useResolvedPath()

    return (
        <Container>
            <img src={Logo} alt="logo" />
            <NavLinkContainer>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        $isActive={ pathname === link.path}>
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <SignOut size={24} />
                </NavLink>
            </Footer>
        </Container>
    )
}