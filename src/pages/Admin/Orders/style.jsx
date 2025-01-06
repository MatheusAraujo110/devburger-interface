import styled from "styled-components";
import Select from 'react-select'
import { remCalc } from "../../../utils/remCalc";

export const ProductImage = styled.img`
    height: ${remCalc(90)};
    padding: ${remCalc(12)};
    border-radius: ${remCalc(16)};
`

export const SelectStatus = styled(Select)`
    width: ${remCalc(240)};
`