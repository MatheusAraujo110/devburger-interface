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
  black1: "#363636;",
  black2: "#1e1e1e",
  purple: "#9758A6",
  purpleHover: "#6F357C",
  red: "#cf3057",
  green: "#61a120",
  orange: "#FFA500",
}

export default GlobalStyle