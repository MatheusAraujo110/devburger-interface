import { Button } from '../../components/Button'
import * as S from './style'

export function CartResume() {
    return (
        <div>
            <S.Container>
                <div className='container-top'>
                    <h2 className='title'>Resumo do Pedido</h2>
                    <p className='items'>Itens</p>
                    <p className='itmes-price'>R$ 20,00</p>
                    <p className='delivery-tax'>Taxa de entrega</p>
                    <p className='delivery-tax-price'>R$ 5,00</p>
                </div>
                <div className='container-bottom'>
                    <p>Total</p>
                    <p>R$ 25,00</p>
                </div>
            </S.Container>
            <Button>Finalizar pedido</Button>
        </div>
    )
}