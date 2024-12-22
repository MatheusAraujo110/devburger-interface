import * as S from './style'
import Logo from '../../assets/Logo 1.svg'

import { CartItems, CartResume } from '../../components'

export function Cart() {
    return (
        <S.Container>
            <S.Banner>
                <img src={Logo} alt="logo-devburger" />
            </S.Banner>
            <S.Title>Checkout - Pedido</S.Title>
            <S.Content>
                <CartItems />
                <CartResume />
            </S.Content>
        </S.Container>
    )
}