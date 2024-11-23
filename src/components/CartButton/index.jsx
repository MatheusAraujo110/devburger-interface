import * as S from './style'

import Cart from '../../assets/Cart.svg'
export function CardButton({ ...props }) {
    return (
        <S.ContainerButton {...props}>
            <img src={Cart} alt="carrinho-de-compras" />
        </S.ContainerButton>
    )
}