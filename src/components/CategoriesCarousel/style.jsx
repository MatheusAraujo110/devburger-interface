import styled from "styled-components";
import { remCalc } from '../../utils/remCalc'
import { colors } from '../../styles'
import { Link } from "react-router-dom";

export const Container = styled.div`
  .carousel-item {
    padding-right: ${remCalc(40)};
    margin-bottom: ${remCalc(20)};
    }

    padding-left: ${remCalc(40)};

    .react-multiple-carousel__arrow--left {
      left: ${remCalc(15)};
      top: ${remCalc(10)};
    }

    .react-multiple-carousel__arrow--right {
      right: ${remCalc(15)};
      top: ${remCalc(10)};
    }
`

export const Title = styled.h2`
   font-size: ${remCalc(32)};
   font-weight: 800;
   color: ${colors.purple};
   padding-bottom: ${remCalc(12)};
   position: relative;
   text-align: center;
   margin-bottom: ${remCalc(40)};
   margin-top: ${remCalc(10)};

   &::after{
    content: ''; // precisa ser vazio
    position: absolute; 
    bottom: ${remCalc(0)};
    width: ${remCalc(56)};
    height: ${remCalc(4)};
    background-color: ${colors.purple};
    left: calc(50% - ${remCalc(28)});
   }
`

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageurl} ');
    background-position: center;
    background-size: cover;
    border-radius: ${remCalc(20)};
    display: flex;
    align-items: center;
    padding: ${remCalc(20)} ${remCalc(10)};
    width: 80%;
    height: ${remCalc(210)};
    cursor: grab;
`

export const CategoryButton = styled(Link)`
   color: ${colors.white};
   background-color: rgba(0,0,0, 0.5);
   padding: ${remCalc(10)} ${remCalc(30)};
   border-radius: ${remCalc(30)};
   font-size: ${remCalc(18)};
   font-weight: 500;
   text-decoration: none;

   &:hover{
    background-color: ${colors.purple};
   }

   &:active{
    opacity: 0.6;
   }
`