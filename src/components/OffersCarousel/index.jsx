import { api } from "../../services/api"
import { useEffect, useState } from 'react'

import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';

import { Container, Title } from './style'
import { CardProduct } from "../CardProduct";
import { formatPrice } from "../../utils/formatPrice";

export function OffersCarousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/products')

            const onlyOffers = data
                .filter((product) => product.offer) // filtra os produtos que tem oferta
                .map((product) => ({ // mapeia os produtos que tem oferta
                    currencyValue: formatPrice(product.price), // formata o preco
                    ...product, 
                }))

            setOffers(onlyOffers)

            console.log(onlyOffers)
            console.log(data)
        }
        loadCategories()
    }, [])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Container>
            <Title>Ofertas do dia</Title>

            <Carousel
                responsive={responsive}
                infinite={true} // sempre que clicar ele vai passando e pegando o último de forma infinita
                partialVisible={false} // para ficar todo visível 
                itemClass="carousel-item"
            >
                {offers.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </Carousel>
        </Container>
    )
}