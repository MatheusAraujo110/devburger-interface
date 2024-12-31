import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import * as S from './style'
import { useCart } from '../../hooks/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0); // Preço final do pedido.
    const [deliveryTax] = useState(500); // Taxa de entrega.

    const navigate = useNavigate()

    const { cartProducts, clearCart } = useCart() // Pega o contexto.

    useEffect(() => {
        // Verifica se CartProducts é uma matriz antes de usar reduce
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc; // Calcula o total.
        }, 0)

        setFinalPrice(sumAllItems);
    }, [cartProducts])

    const subimtOrder = async () => {
        const products = cartProducts.map((product) => {
            return {
                id: product.id,
                quantity: product.quantity,
                price: product.price,
            }
        })

        try {
            const { data } = await api.post('/create-payment-intent', { products })

            navigate('/checkout', { state: data })
        } catch (error) {
            toast.error('Error tente novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }

    return (
        <div>
            <S.Container>
                <div className='container-top'>
                    <h2 className='title'>Resumo do Pedido</h2>
                    <p className='items'>Itens</p>
                    <p className='items-price'>{formatPrice(finalPrice)}</p>
                    <p className='delivery-tax'>Taxa de entrega</p>
                    <p className='delivery-tax-price'>{formatPrice(deliveryTax)}</p>
                </div>
                <div className='container-bottom'>
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </S.Container>
            <Button onClick={subimtOrder}>Finalizar pedido</Button>
        </div>
    )
}
