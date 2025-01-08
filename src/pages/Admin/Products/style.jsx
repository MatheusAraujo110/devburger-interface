import styled from "styled-components";
import { remCalc } from '../../../utils/remCalc'
import { colors } from '../../../styles'

export const Container = styled.div``

export const ProductImage = styled.img`
    height: ${remCalc(80)};
    padding: ${remCalc(12)};
    border-radius: ${remCalc(16)};
`

export const EditButton = styled.button`
    border: none;
    background-color: ${colors.white};
    color: ${colors.red2};
    font-size: ${remCalc(20)};
    font-weight: 600;
    cursor: pointer;
    padding: ${remCalc(8)} ${remCalc(16)};
    border-radius: ${remCalc(5)};

    &:hover {
        background-color: ${colors.purple};
        color: ${colors.white};
    }

    &:active {
        opacity: 0.4;
    }
`