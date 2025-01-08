import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import * as yup from "yup"

import * as S from './styles'
import Logo from '../../assets/Logo 1.svg'
import { Button } from '../../components/Button'
import { api } from "../../services/api"
import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi";


export function Register() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

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
        setTimeout(() => {
            navigate('/login')
        }, 2000);
        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            },
                {
                    validateStatus: () => true,
                },
            )
            if (status === 200 || status === 201) {
                toast.success('Conta criada com Sucesso')
            } else if (status === 400 || status === 409) {
                toast.error('E-mail já cadastrado! Faça login para continuar.')
            } else {
                throw new Error() // Imediatamente, ele joga dentro do catch.
            }
        } catch (error) {
            toast.error("Falha no sistema! Tente novamente.")
        }
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
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password")}
                        />
                        <p>{errors?.password?.message}</p>
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Confirmar senha</label>
                        <div style={{ position: 'relative' }}>
                            <input type={showPassword ? "text" : "password"}
                                {...register("confimrPassword")} />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </button>
                        </div>
                        {/* <input type={showPassword ? "text" : "password"}
                            {...register("confimrPassword")} /> */}
                        <p>{errors?.confimrPassword?.message}</p>
                    </S.InputContainer>
                    <Button type="submit">Confirmar Cadastro</Button>
                </S.Form>
                <p>Já possui conta? <S.Link href='link' to="/login">Clique aqui.</S.Link></p>
            </S.RigthContainer>
        </S.Container>
    )
}

export default Register