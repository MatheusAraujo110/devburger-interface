import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import * as yup from "yup"

import * as S from './styles'
import Logo from '../../assets/Logo 1.svg'
import { Button } from '../../components/Button'
import { api } from "../../services/api"


export function Login() {
    const navigate = useNavigate()

    const schema = yup.object({  // validação dos campos
        email: yup
            .string() // se é uma estringe.
            .email('Digite um email válido!') // 'Digite um email válido'
            .required('O email é obrigatório!'), // 'O email é obrigatório'
        password: yup
            .string() // se é uma estringe.
            .min(6, 'A senha deve ter pelo menos 6 caracteres!') // 'A senha deve ter pelo menos 6 caracteres' 
            .required('A senha é obrigatória!'), // 'A senha é obrigatória'
    }).required();

    const {
        register, // Registrar os inputs
        handleSubmit, // Vai lidar com as informações do formulário
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema), // Ele ajuda a validar os dados do campo schema
    })

    const onSubmit = async (data) => {
        const {
            data: { token },
        } = await toast.promise(
            api.post('/session', {
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'Verificando seus dados',
                success: {
                    render() {
                        setTimeout(() => {
                            navigate('/');
                        }, 2000);
                        return ('Seja Bem-Vindo(a)')
                    },
                },
                error: 'Email ou Senha Incorretos 🤯',
            },
        );

        localStorage.setItem('token', token);
    };

    // .then(response => {
    //     console.log(response)
    // })
    // .catch(error => {
    //     console.error(error)
    // });

    return (
        <S.Container>
            <S.LeftContainer>
                <img src={Logo} alt="logo" />
            </S.LeftContainer>
            <S.RigthContainer>
                <S.Title>Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span></S.Title>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </S.InputContainer>
                    <Button type="submit">Entrar</Button>
                </S.Form>
                <p>Não possui conta? <S.Link href='link' to="/cadastro">Clique aqui.</S.Link></p>
            </S.RigthContainer>
        </S.Container>
    )
}

export default Login