import * as S from './styles'
import Logo from '../../assets/Logo 1.svg'

import { Button } from '../../components/Button'

export function Login() {
    return (
        <S.Container>
            <S.LeftContainer>
                <img src={Logo} alt="logo" />
            </S.LeftContainer>
            <S.RigthContainer>
                <S.Title>Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span></S.Title>
                <S.Form >
                    <S.InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </S.InputContainer>
                    <Button>ENTRAR</Button>
                </S.Form>
                <p>Não possui conta? <a href='link'>Clique aqui.</a></p>
            </S.RigthContainer>
        </S.Container>
    )
}

export default Login