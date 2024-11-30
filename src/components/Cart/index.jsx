import * as S from './style'
import Logo from '../../assets/Logo 1.svg'


export default function Cart() {
    return (
        <S.Container>
            <S.Banner>
                <img src={Logo} alt="logo-devburger" />
            </S.Banner>
            <S.Title>Checkout - Pedido</S.Title>
            <S.Content>
                {/* <S.CartItems></S.CartItems> */}
                {/* <S.CartResume></S.CartResume> */}
            </S.Content>
        </S.Container>
    )
}