import styled from "styled-components";
import { remCalc } from "../../utils/remCalc";
import { colors } from "../../styles";


export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(${remCalc(220)}, ${remCalc(280)}) 1fr;

    main {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        background-color: ${colors.white1};
    }

    section {
        margin: 0 auto;
        padding: ${remCalc(40)} ${remCalc(20)};
        max-width: ${remCalc(1200)};
        width: 100%;
    }
`