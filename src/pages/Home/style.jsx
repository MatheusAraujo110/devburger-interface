import styled from "styled-components";
import { remCalc } from "../../utils/remCalc";
import { colors } from "../../styles";

import BannerHome from "../../assets/banner-home.svg"
import Backgroud from "../../assets/Group 195.svg"

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: ${remCalc(400)};

  h1 {
    font-family: "Road Rage", sans-serif;
    color: ${colors.white};
    font-size: ${remCalc(60)};
    position: absolute;
    right: 15%;
    top: 8%;
  }
`

export const Container = styled.section`
  background: linear-gradient(
    rgb(225, 225, 225,  0.5),
     rgb(99, 2, 111,  30%)),
      url('${Backgroud}');
`
