import styled from "styled-components";
import { remCalc } from "../../utils/remCalc";
import { colors } from "../../styles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${remCalc(40)};
    padding: ${remCalc(20)};
    border-radius: ${remCalc(8)};
    background-color: ${colors.white};
    cursor: grab;
    box-shadow:rgba(1, 1, 1, 1.35) 0px 5px 15px;

    div {
        width: 100%;
        height: ${remCalc(80)};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: ${remCalc(5)};

        p {
            font-size: ${remCalc(18)};
            color: ${colors.orange};
            line-height: ${remCalc(20)};
            font-weight: 700;
            margin-top: ${remCalc(40)};
        }

        strong {
            font-size: ${remCalc(22)};
            color: ${colors.black1};
            line-height: ${remCalc(20)};
            font-weight: 800;
        }
    }
`

export const CardIamge = styled.img`
    height: ${remCalc(100)};
    position: absolute;
    top: ${remCalc(-50)};
    
`
