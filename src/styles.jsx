import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}

  button, a {
    cursor: pointer;
}
`

export const colors = {
  white: "#FFF",
  white1: "#f0f0f0",
  gray: "#625E5E",
  black1: "#363636;",
  black2: "#1e1e1e",
  black3: "#1f1f1f",
  purple: "#9758A6",
  purpleHover: "#6F357C",
  red: "#FF3205",
  red2: "#ff0000",
  green: "#61a120",
  orange: "#FFA500",
}

export default GlobalStyle