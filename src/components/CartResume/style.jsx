import styled from "styled-components";
import { remCalc } from "../../utils/remCalc";
import { colors } from "../../styles";

export const Container = styled.div`
    background-color: ${colors.white};
    border-radius: ${remCalc(20)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: ${remCalc(20)};

    * {
        color: ${colors.gray1};
        font-weight: 500;
    }

    .container-top {
        display: grid;
        grid-gap: ${remCalc(10)} 30%;
        grid-template-areas: 
            'title title'
            'itmes items-price'
            'delivery-tax delivery-tax-price';

        .title {
            grid-area: title;
            font-size: ${remCalc(25)};
            font-weight: 700;
            background-color: ${colors.gray1};
            color: ${colors.white};
            width: 100%;
            padding: ${remCalc(10)};
            text-align: center;
            border-top-left-radius: ${remCalc(20)};
            border-top-right-radius: ${remCalc(20)};
        }

        .items {
            grid-area: itmes;
            padding-left: ${remCalc(20)};
        }

        .items-price {
            grid-area: items-price;
            padding-right: ${remCalc(20)};
        }

        .delivery-tax {
            grid-area: delivery-tax;
            padding-left: ${remCalc(20)};
        }

        .delivery-tax-price {
            grid-area: delivery-tax-price;
            padding-right: ${remCalc(20)};
        }
    }
    .container-bottom {
        display: flex;
        justify-content: space-between;
        font-size: ${remCalc(20)};
        font-weight: 700;
        margin-top: ${remCalc(24)};
        padding: ${remCalc(20)};

         * {
            color: ${colors.gray1};
            font-weight: 700;
        }   
        }
`
