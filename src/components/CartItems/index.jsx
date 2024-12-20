import { useCart } from '../../hooks/CartContext'
import { Table } from '../index'
import { formatPrice } from '../../utils/formatPrice'
import * as S from './style'

import TrashIcon from '../../assets/trash.svg'

export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart()

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>

            <Table.Body>
                {cartProducts?.length > 0 ? (
                    cartProducts.map((product) => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <S.ProductImage src={product.url} alt="imagem do produto" />
                            </ Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>
                                <S.ButtonGroup>
                                    <button onClick={() => decreaseProduct(product.id)}>-</button>
                                    {product.currencyValue}
                                    <button onClick={() => increaseProduct(product.id)}>+</button>
                                </S.ButtonGroup>
                            </Table.Td>
                            <Table.Td>{product.quantity}</Table.Td>
                            <Table.Td>
                                <S.TotalPrice>
                                    {formatPrice(product.quantity * product.price)}
                                </S.TotalPrice>
                            </Table.Td>
                            <Table.Td>
                                <S.TrashImage src={TrashIcon} alt="icone de lixeira" onClick={() => deleteProduct(product.id)}></S.TrashImage>
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : (
                    <Table.Tr>
                        <Table.Td colSpan="5">
                            <S.EmptyCart>Seu carrinho está vazio</S.EmptyCart>
                        </Table.Td>
                    </Table.Tr>
                )}
            </Table.Body>
        </Table.Root >
    )
}   