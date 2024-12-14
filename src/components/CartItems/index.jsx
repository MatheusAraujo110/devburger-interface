import { Divide } from '@phosphor-icons/react'
import { useCart } from '../../hooks/CartContext'
import { Table } from '../index'

export function CartItems() {
    const { cartProducts, incredeaseProduct, decreaseProduct } = useCart()

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                </Table.Tr>
            </Table.Header>

            <Table.Body>
                {cartProducts?.length > 0 ? (
                    cartProducts.map((product) => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <img src={product.url} alt="imagem do produto" />
                            </ Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{product.currencyValue}</Table.Td>
                            <Table.Td>{product.quantity}</Table.Td>
                        </Table.Tr>
                    ))
                ) : <div>Seu carrinho esta vazio</div>}
            </Table.Body>
        </Table.Root>
    )
}   