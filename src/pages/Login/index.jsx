import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importando os ícones

import * as S from './styles';
import Logo from '../../assets/Logo 1.svg';
import { Button } from '../../components/Button';
import { api } from "../../services/api";
import { useUser } from "../../hooks/UserContext";

export function Login() {
    const navigate = useNavigate();
    const { putUserData } = useUser();
    const [showPassword, setShowPassword] = useState(false); // Estado para visibilidade da senha

    const schema = yup.object({
        email: yup
            .string()
            .email('Digite um email válido!')
            .required('O email é obrigatório!'),
        password: yup
            .string()
            .min(6, 'A senha deve ter pelo menos 6 caracteres!')
            .required('A senha é obrigatória!'),
    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        const { data: userData } = await toast.promise(
            api.post('/session', {
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'Verificando seus dados',
                success: {
                    render() {
                        setTimeout(() => {
                            if (userData?.admin) {
                                navigate('/admin/pedidos')
                            } else {
                                navigate('/cardapio')
                            }
                        }, 2000);
                        return ('Seja Bem-Vindo(a)');
                    },
                },
                error: 'Email ou Senha Incorretos 🤯',
            },
        );

        putUserData(userData);
    };

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
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password")}
                            />
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
                                {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                            </button>
                        </div>
                        <p>{errors?.password?.message}</p>
                    </S.InputContainer>
                    <Button type="submit">Entrar</Button>
                </S.Form>
                <p>Não possui conta? <S.Link href='link' to="/cadastro">Clique aqui.</S.Link></p>
            </S.RigthContainer>
        </S.Container>
    );
}

export default Login;