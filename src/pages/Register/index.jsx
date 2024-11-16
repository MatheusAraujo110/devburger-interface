import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import * as yup from "yup"

import * as S from './styles'
import Logo from '../../assets/Logo 1.svg'
import { Button } from '../../components/Button'
import { api } from "../../services/api"


export function Register() {
    const schema = yup.object({  // validação dos campos
        name: yup.string().required('O nome é obrigatório'),
        email: yup
            .string() // se é uma estringe.
            .email('Digite um email válido!') // 'Digite um email válido'
            .required('O email é obrigatório!'), // 'O email é obrigatório'
        password: yup
            .string() // se é uma estringe.
            .min(6, 'A senha deve ter pelo menos 6 caracteres!') // 'A senha deve ter pelo menos 6 caracteres' 
            .required('A senha é obrigatória!'), // 'A senha é obrigatória'
        confimrPassword: yup.
            string().
            oneOf([yup.ref('password')], 'As senhas devem ser iguais').  // oneOf => serve para fazer a comparação; yup.ref() => adiciona a referência onde quer ser comparada.
            required('Confirme sua senha')
    }).required();

    const {
        register, // Registrar os inputs
        handleSubmit, // Vai lidar com as informações do formulário
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema), // Ele ajuda a validar os dados do campo schema
    })

    const onSubmit = async (data) => {  // data => pega todas as informações que está chegando do formulário.
        toast.promise(
            api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'Carregando os dados...',
                success: 'Cadastro realizado com sucesso! 🎉',
                error: 'Ops, algo deu errado! 😞'
            }
        )
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            });
    };

    return (
        <S.Container>
            <S.LeftContainer>
                <img src={Logo} alt="logo" />
            </S.LeftContainer>
            <S.RigthContainer>
                <S.Title>Criar conta</S.Title>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </S.InputContainer>
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
                    <S.InputContainer>
                        <label>Confirmar senha</label>
                        <input type="password" {...register("confimrPassword")} />
                        <p>{errors?.confimrPassword?.message}</p>
                    </S.InputContainer>
                    <Button type="submit">Confirmar Cadastro</Button>
                </S.Form>
                <p>Já possui conta? <a href='link'>Clique aqui.</a></p>
            </S.RigthContainer>
        </S.Container>
    )
}

export default Register