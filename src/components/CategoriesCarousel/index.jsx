import { api } from "../../services/api"
import { useEffect, useState } from 'react'

import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';

import { Container, ContainerItems, Title } from './style'

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')
            
            setCategories(data)
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
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Container>
            <Title>Categorias</Title>

            <Carousel
                responsive={responsive}
                infinite={true} // sempre que clicar ele vai passando e pegando o último de forma infinita
                partialVisible={false} // para ficar todo visível 
                itemClass="carousel-item"
            >
                {categories.map((category) => (
                    <ContainerItems key={category.id} imageUrl={category.url}>
                        <p>{category.name}</p>
                    </ContainerItems>))}
            </Carousel>
        </Container>
    )
}