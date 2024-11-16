import * as S from './styles'

export function Button({ children, ...props }) {  // children - chama oque está escrito dentro dele
    return (
        <S.ContainerButton {...props}>{children}</S.ContainerButton>
    )
}