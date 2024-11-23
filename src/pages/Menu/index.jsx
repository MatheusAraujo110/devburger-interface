import * as S from './style'

import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from '../../components/CardProduct';


export default function Menu() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')

            const newCategories = [{
                id: 0,
                name: 'Todos',
            }, ...data]
            setCategories(newCategories)
        }
        async function loadProducts() {
            const { data } = await api.get('/products')

            const newProducts = data
                .map((product) => ({ // mapeia os produtos que tem oferta
                    currencyValue: formatPrice(product.price), // formata o preco
                    ...product,
                }))

            setProducts(newProducts)
        }
        loadCategories()
        loadProducts()
    }, [])

    return (
        <S.Container>
            <S.Banner>
                <h1>
                    O MELHOR
                    <br />
                    HAMBURGUER
                    <br />
                    ESTÁ AQUI!
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </S.Banner>
            <S.CategoryMenu>
                {categories.map((category) => (
                    <S.CategoryButton key={category.id}>{category.name}</S.CategoryButton>
                ))}
            </S.CategoryMenu>

            <S.ProductsContainer>
                {products.map((product) => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </S.ProductsContainer>
        </S.Container>
    )
}