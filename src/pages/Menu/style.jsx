import styled from "styled-components";
import { remCalc } from "../../utils/remCalc";
import { colors } from "../../styles";

import BannerHamburguer from "../../assets/BannerHmaburguer.svg";
import Backgroud from "../../assets/Group 195.svg"
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${colors.white1};

    background: linear-gradient(
    rgb(225, 225, 225,  0.5),
     rgb(99, 2, 111,  30%)),
      url('${Backgroud}');
`

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${remCalc(400)};
    position: relative;
    background: url('${BannerHamburguer}') no-repeat;
    background-position: center;
    background-color: ${colors.black3};
    background-size: cover;

    h1 {
        font-family: "Road Rage", sans-serif;
        color: ${colors.white};
        font-size: ${remCalc(80)};
        line-height: ${remCalc(65)};
        text-align: center;
        position: absolute;
        right: 20%;
        top: 20%;

        span {
        color: ${colors.white};
        display: block;
        font-size: ${remCalc(20)};
    }
    }
`

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: ${remCalc(40)};
    margin-top: ${remCalc(50)};
`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => props.$isActive ? colors.green : colors.purple};
    font-size: ${remCalc(25)};
    font-weight: 500;
    padding-bottom: ${remCalc(10)};
    line-height: ${remCalc(20)};
    border: none;
    border-bottom: ${(props) => props.$isActive && `${remCalc(3)} solid ` + colors.green}; // Cor da borda quando o botão estiver ativo.

    &:active {
        opacity: 0.2;
    }
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${remCalc(60)};
    padding: ${remCalc(40)};
    justify-content: center;
    max-width: ${remCalc(1280)};
    margin: ${remCalc(50)} auto;
`

export const ButtonBack = styled.button`
    display: flex;
    align-items: center;
    margin: ${remCalc(20)} ${remCalc(20)};
    padding: ${remCalc(15)};
    background-color: ${colors.purple};
    color: ${colors.white};
    font-size: ${remCalc(15)};
    border: none;
    border-radius: ${remCalc(25)};
    cursor: pointer;
    gap: ${remCalc(10)};

    &:hover {
        background-color: ${colors.purpleHover};
    }

    &:active {
      opacity: 0.6;
    }

    img {
        width: ${remCalc(10)};
        transform: scale(-1);
    }
`