import styled from "styled-components";
import { remCalc } from "../../utils/remCalc";
import { colors } from "../../styles";

export const ProductImage = styled.img`
    width: ${remCalc(100)};
    height: ${remCalc(80)};
    border-radius: ${remCalc(16)};
`

export const ButtonGroup = styled.div`
    display: flex;
    gap: ${remCalc(12)};
    align-items: center;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${remCalc(30)};
        height: ${remCalc(30)};
        border-radius: ${remCalc(4)};
        border: none;
        background-color: ${colors.purple};
        color: ${colors.white};
        font-weight: bold;
        cursor: pointer;

        &:hover{
            background-color: ${colors.purpleHover};
        }

        &:active{
            opacity: 0.6;
        }
    }
`

export const EmptyCart = styled.p`
    font-size: ${remCalc(20)};
    text-align: center;
    font-weight: bold;
`

export const TotalPrice = styled.p`
    font-weight: bold;
`

export const TrashImage = styled.img`
    

    &:active{
        opacity: 0.6;
    }
`   
