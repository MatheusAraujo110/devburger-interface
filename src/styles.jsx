import { createGlobalStyle } from "styled-components"

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
  black2: "#1e1e1e",
  purple: "#9758A6",
  purpleHover: "#6F357C",
  red: "#cf3057",
}

export default GlobalStyle