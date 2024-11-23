import * as S from './style'

import { CategoriesCarousel } from '../../components/CategoriesCarousel'
import { OffersCarousel } from '../../components/OffersCarousel'

export function Home() {
    return (
        <main>
            <S.Banner>
                <h1>Bem vindo(a)!</h1>
            </S.Banner>
            <S.Container>
                <div>
                    <CategoriesCarousel />
                    <OffersCarousel />
                </div>
            </S.Container>
        </main>
    )
}

export default Home 