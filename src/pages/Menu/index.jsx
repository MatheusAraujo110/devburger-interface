import * as S from './style'

import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from '../../components/CardProduct';
import { useLocation, useNavigate } from 'react-router-dom';

import Seta from '../../assets/Seta.svg'
import Footer from '../../components/Footer';


export default function Menu() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const navigate = useNavigate()

    const { search } = useLocation() // pega a url.

    const queryparams = new URLSearchParams(search)  // pega os parametros da url.

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryparams.get('categoria') // pega o id da categoria.
        if (categoryId) {
            return Number(categoryId)  // retorna o id da categoria.
        }
        return 0
    })
    const handleBack = () => {
        navigate(-1); // Navega para a página anterior
    };

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories') // pega todas as categorias.

            const newCategories = [{ // adiciona a categoria todos.
                id: 0, // id da categoria.
                name: 'Todos', // nome da categoria.
            }, ...data] // adiciona as outras categorias.
            setCategories(newCategories) // seta as categorias.
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
        loadCategories() // chama a função.
        loadProducts() // chama a função.
    }, [])

    useEffect(() => {
        if (activeCategory === 0) { // se a categoria for igual a 0 ele vai pegar todos os produtos.
            setFilteredProducts(products) // vai pegar todos os produtos
        } else {
            const newFilteredProducts = products.filter((product) => product.category_id === activeCategory) // filtra os produtos por categoria.
            setFilteredProducts(newFilteredProducts) // vai pegar os produtos filtrados.
        }
    }, [products, activeCategory]) // dependencia dos produtos e da categoria.

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
            <S.ButtonBack onClick={handleBack}> <img src={Seta} alt="seta" />
                Voltar
            </S.ButtonBack>
            <S.CategoryMenu>
                {categories.map((category) => (
                    <S.CategoryButton
                        key={category.id}
                        $isActive={category.id === activeCategory}
                        onClick={() => {
                            navigate( // navega para a rota cardapio.
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`,
                                },
                                {
                                    replace: true, // substitui a rota atual.
                                },
                                setActiveCategory(category.id)
                            )
                        }}
                    >{category.name}</S.CategoryButton>
                ))}
            </S.CategoryMenu>

            <S.ProductsContainer>
                {filteredProducts.map((product) => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </S.ProductsContainer>
            <Footer />
        </S.Container>
    )
}