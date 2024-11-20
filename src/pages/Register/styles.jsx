import styled from "styled-components";
import { remCalc } from "../../utils/remCalc";
import { colors } from "../../styles";
import { Link as ReactLink } from 'react-router-dom'

import BackgroundLogin from '../../assets/Background-Login.svg'
import Background from '../../assets/Group 195.svg'
export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size:cover;
  width: 100%;
  max-width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
  }
`

export const RigthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 50%;
  height: 100%;
  background: url(${Background});
  background-color: ${colors.black2};

  p {
    color: ${colors.white};
    font-size: ${remCalc(18)};
    font-weight: 800;

    a {
      text-decoration: underline;
      color: ${colors.white};
    }
  }
`

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: ${remCalc(40)};
  color: ${colors.purple};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${remCalc(20)};
  padding: ${remCalc(20)};
  width: 100%;
  max-width: ${remCalc(400)};
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${remCalc(5)};
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: ${remCalc(40)};
    border-radius: ${remCalc(5)};
    padding: ${remCalc(0)} ${remCalc(16)};
    font-size: ${remCalc(17)};
  }

  label {
    font-size: ${remCalc(18)};
    font-weight: 600;
    color: #fff;
  }

  p {
    font-size: ${remCalc(14)};
    line-height: 80%;
    color: ${colors.red};
    font-weight: 600;
    height: ${remCalc(10)};
  }
`

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${colors.white};
`