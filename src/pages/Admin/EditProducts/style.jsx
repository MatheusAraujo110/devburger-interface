import styled from "styled-components";
import { remCalc } from "../../../utils/remCalc";
import { colors } from "../../../styles";

import ReactSelect from 'react-select'
import { Button } from "../../../components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: ${remCalc(20)};
    background-color: ${colors.black1};
    padding: ${remCalc(32)};
    min-width: ${remCalc(380)};
    gap: ${remCalc(12)};
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${remCalc(4)};
`

export const Label = styled.label`
    color: ${colors.white};
    font-size: ${remCalc(14)};
`

export const Input = styled.input`
    width: 100%;
    border: none;
    height: ${remCalc(40)};
    border-radius: ${remCalc(5)};
    padding: ${remCalc(0)} ${remCalc(12)};
    font-size: ${remCalc(17)};
`

export const LabelUpload = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: ${remCalc(1)} dashed ${colors.white};
    border-radius: ${remCalc(5)};
    padding: ${remCalc(15)};
    gap: ${remCalc(8)};
    color: ${colors.white};
    font-size: ${remCalc(14)};
    font-weight: 600;
    margin: ${remCalc(12)} 0;

    > svg {
        width: ${remCalc(30)};
        height: ${remCalc(30)};
        fill: ${colors.white};
    }

    input {
        display: none;
    }
`

export const Select = styled(ReactSelect)``

export const SubmitButton = styled(Button)`
    margin-top: ${remCalc(20)};
    align-self: center;
`

export const ErrorMessage = styled.span`
    color: ${colors.red2};
    font-size: ${remCalc(14)};
    margin-top: ${remCalc(4)};
`

export const ContainerCheckbox = styled.div`
    display: flex;
    gap: ${remCalc(10)};
`