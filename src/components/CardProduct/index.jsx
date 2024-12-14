import { CardButton } from '../CartButton'
import { useCart } from '../../hooks/CartContext'

import * as S from './style'

export function CardProduct({ product }) {
    const { putProductInCart } = useCart()

    return (
        <S.Container>
            <S.CardIamge src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
            <CardButton onClick={() => putProductInCart(product)}></CardButton>
        </S.Container >
    )
}

