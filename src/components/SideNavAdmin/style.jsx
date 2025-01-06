import styled from "styled-components";
import { remCalc } from "../../utils/remCalc";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${colors.black3};

    img {
        width: 60%;
        margin: ${remCalc(40)} 0;
    }
`

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: ${remCalc(12)};
    padding: ${remCalc(12)} ${remCalc(20)};
    text-decoration: none;
    color: ${colors.white};
    font-size: ${remCalc(16)};
    cursor: pointer;
    background-color: ${(props) => props.$isActive ? colors.purple : colors.black3};

    &:hover {
        background-color: ${colors.purple};
    }
`

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;
    background-color: ${colors.black3};
    padding: ${remCalc(20)} 0;
`