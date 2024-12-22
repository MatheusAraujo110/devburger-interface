import styled from "styled-components";
import { remCalc } from '../../utils/remCalc'
import { colors } from '../../styles'

import Backgroud from "../../assets/Group 195.svg"
import Texture from '../../assets/Texture.svg'

export const Container = styled.div`
   width: 100%;
   background: linear-gradient(
    rgb(225, 225, 225,  0.5),   
     rgb(225, 225, 11,  30%)),
      url('${Backgroud}');
   min-height: 100vh;
`

export const Banner = styled.div`
   background: url('${Texture}');
   background-size: cover;
   background-position: center;
   background-color: ${colors.black2};
   display: flex;
   align-items: center;   
   justify-content: center;
   position: relative;
   height: ${remCalc(180)};

   img{
      height: ${remCalc(170)};
   }
`

export const Title = styled.h1`
   font-size: ${remCalc(32)};
   font-weight: 800;
   color: ${colors.green};
   padding-bottom: ${remCalc(12)};
   text-align: center;
   position: relative;

   &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: ${remCalc(100)};
      height: ${remCalc(3)};
      background-color: ${colors.green};
   }
`

export const Content = styled.div`
   display: grid;
   grid-template-columns: 1fr 30%;   
   gap: ${remCalc(40)};
   width: 100%;
   max-width: ${remCalc(1280)};
   margin: 0 auto;
   padding: ${remCalc(40)};
`