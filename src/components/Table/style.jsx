import styled from "styled-components";
import { remCalc } from '../../utils/remCalc'
import { colors } from '../../styles'

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: ${colors.white};
    border-radius: ${remCalc(20)};
`

export const Header = styled.thead``

export const Tr = styled.tr``

export const Th = styled.th`
    padding: ${remCalc(16)};
    text-align: left;
    color: ${colors.white};
    background-color: ${colors.gray1};
    border-bottom: ${remCalc(1)} solid ${colors.gray2};

    &:last-child {
        border-top-right-radius: ${remCalc(20)};
    }

    &:first-child {
        border-top-left-radius: ${remCalc(20)};
    }
`

export const Td = styled.td`
    padding: ${remCalc(16)};
    color: ${colors.gray1};
    font-weight: 500;
    line-height: 115%;
`

export const Body = styled.tbody``