import { Outlet, Navigate } from "react-router-dom";
import { SideNavAdmin } from "../../components";
import * as S from './style'

export function AdminLayout() {
    const { admin: isAdmin } = JSON.parse(
        localStorage.getItem('devburguer:userData'),
    )

    return isAdmin ? (
        <S.Container>
            <SideNavAdmin />
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
        </S.Container>
    ) : <Navigate to="/login" />
}