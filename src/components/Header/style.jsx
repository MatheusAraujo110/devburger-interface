import styled from "styled-components";
import { remCalc } from "../../utils/remCalc";
import { colors } from "../../styles";

import { Link } from "react-router-dom";

export const Container = styled.div`
   background-color: ${colors.black2};
   width: 100%;
   height: ${remCalc(75)};
   padding: 0 ${remCalc(56)};
`

export const Content = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   max-width: ${remCalc(1280)};
   margin: 0 auto;
`

export const Navigate = styled.nav`
   display: flex;
   align-items: center;
   justify-content: center;
   height: ${remCalc(75)};

   div {
    display: flex;  
    align-items: center;
    justify-content: center;
    gap: ${remCalc(20)};
   }

   hr {
      height: ${remCalc(32)};
      border: ${remCalc(1)} solid ${colors.gray};
   }
`

export const HeaderLink = styled(Link)`
   text-decoration: none;
   color: ${(props) => props.$isActive ? colors.purple : colors.white};
   border-bottom: ${(props) => props.$isActive ? `${remCalc(1)} solid ` + colors.purple : 'none'};
   font-size: ${remCalc(16)};
   transition: color 0.3s;

   &:active {
      opacity: 0.4;
   }
`

export const Options = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: ${remCalc(48)};
`

export const Profile = styled.div`
   display: flex;
   align-items: center;
   gap: ${remCalc(12)};
   font-size: ${remCalc(16)};

   p {
    color: ${colors.white};
    line-height: 90%;
    font-weight: 300;
    
    span {
      color: ${colors.purple};
      font-weight: 700;
    }
   }
`

export const Logout = styled.button`
   color: ${colors.red};
   text-decoration: none;
   font-weight: 700;
   background-color: transparent;
   border: none;

   &:active {
      opacity: 0.6;
   }
`

export const LinkContainer = styled.div`
   display: flex;
   align-items: center;
   gap: ${remCalc(20)};
`