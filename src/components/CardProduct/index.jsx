import { CardButton } from '../CartButton'
import * as S from './style'

export function CardProduct({ product }) {
    return (
        <S.Container>
            <S.CardIamge src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>R${product.price}</strong>
            </div>
            <CardButton></CardButton>
        </S.Container>
    )
}

