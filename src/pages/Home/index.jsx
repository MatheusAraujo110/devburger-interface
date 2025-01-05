import * as S from './style'

import { CategoriesCarousel, OffersCarousel } from '../../components'

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