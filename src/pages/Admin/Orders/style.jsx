import styled from "styled-components";
import Select from 'react-select'
import { remCalc } from "../../../utils/remCalc";
import { colors } from "../../../styles";

export const ProductImage = styled.img`
    height: ${remCalc(90)};
    padding: ${remCalc(12)};
    border-radius: ${remCalc(16)};
`

export const SelectStatus = styled(Select)`
    width: ${remCalc(240)};
`

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: ${remCalc(28)} 0;
    gap: ${remCalc(50)};
`

export const FilterOption = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: ${(props) => props.$isActive ? colors.purple : colors.gray};
    border-bottom: ${(props) => props.$isActive && `${remCalc(3)} solid ` + colors.purple};
    font-size: ${remCalc(18)};
    line-height: ${remCalc(20)};
    padding-bottom: ${remCalc(5)};
`