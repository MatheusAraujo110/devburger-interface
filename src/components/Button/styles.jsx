import styled from "styled-components";
import { remCalc } from '../../utils/remCalc'
import { colors } from '../../styles'

export const ContainerButton = styled.button`
   width: 100%;
   height: ${remCalc(52)};
   border: ${remCalc(0)};
   border-radius: ${remCalc(5)};
   background-color: ${colors.purple};
   font-family: "Road Rage", sans-serif;
   font-size: ${remCalc(30)};
   color: ${colors.white};

   &:hover {
   background: ${colors.purpleHover};
   background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
   border-radius: ${remCalc(5)};
   }

   &:active {
      opacity: 0.9;
   }
`