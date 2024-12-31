import styled from "styled-components";
import { remCalc } from '../../utils/remCalc'
import { colors } from '../../styles'

export const Container = styled.div`
  .carousel-item {
    width: ${remCalc(275)};
    padding: ${remCalc(0)} ${remCalc(75)} ${remCalc(0)} ${remCalc(64)};
    margin-bottom: ${remCalc(64)};
    }
    overflow-x: hidden;

    .react-multi-carousel-list{
      overflow: visible;
    }

    .react-multiple-carousel__arrow--left {
      left: ${remCalc(15)};
      top: ${remCalc(75)};
    }

    .react-multiple-carousel__arrow--right {
      right: ${remCalc(15)};
      top: ${remCalc(75)};
    }

    padding-left: ${remCalc(40)};
`

export const Title = styled.h2`
   font-size: ${remCalc(32)};
   font-weight: 800;
   color: ${colors.green};
   padding-bottom: ${remCalc(12)};
   position: relative;
   text-align: center;
   margin: ${remCalc(70)} ${remCalc(0)};
   margin-top: ${remCalc(10)};

   &::after{
    content: ''; // precisa ser vazio
    position: absolute; 
    bottom: ${remCalc(0)};
    width: ${remCalc(56)};
    height: ${remCalc(4)};
    background-color: ${colors.green};
    left: calc(50% - ${remCalc(28)});
   }
`
