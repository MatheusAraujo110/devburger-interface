import styled from "styled-components";
import { remCalc } from '../../utils/remCalc'
import { colors } from '../../styles'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${remCalc(15)} 0;
    background-color: ${colors.purple2};
    color: ${colors.white};

    p {
        font-size: ${remCalc(15)};
    }
`