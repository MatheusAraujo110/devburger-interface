import styled from "styled-components";
import { remCalc } from "../../utils/remCalc";
import { colors } from "../../styles";

export const ContainerButton = styled.button`
    background-color: ${colors.purple};
    width: 100%;
    height: ${remCalc(48)};
    border-radius: ${remCalc(5)};
    border: none;
    color: ${colors.white};
    font-size: ${remCalc(18)};

    &:hover {
        background-color: ${colors.purpleHover};
    }

    &:active {
      opacity: 0.9;
   }
`