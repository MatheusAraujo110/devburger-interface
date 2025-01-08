import * as S from './style'
import * as yup from "yup"
import { Image } from "@phosphor-icons/react"
import { api } from "../../../services/api"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom'

const schema = yup
    .object({
        name: yup.string().required('O nome do produto é obrigatório'),
        price: yup.number().positive().required('O preço do produto é obrigatório').typeError('O preço do produto é obrigatório'),
        category: yup.object().required('Escolha uma categoria'),
        offer: yup.bool(),
    })
    .required()

export function EditProducts() {
    const [fileName, setFileName] = useState('')
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    const {
        state: { product },
    } = useLocation()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')
            setCategories(data)
        }

        loadCategories()
    }, [])

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        const productFormData = new FormData()
        productFormData.append('name', data.name)
        productFormData.append('price', data.price * 100)
        productFormData.append('category_id', data.category.id)
        productFormData.append('file', data.file[0])
        productFormData.append('offer', data.offer)

        await toast.promise(api.put(`/products/${product.id}`, productFormData), {
            pending: 'Editando produto...',
            success: 'Produto editado com sucesso!',
            error: 'Falha ao editar produto!',
        })

        setTimeout(() => {
            navigate('/admin/produtos')
        }, 1000);
    }

    return (
        <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.InputGroup>
                    <S.Label>Nome</S.Label>
                    <S.Input
                        type='text' {...register('name')}
                        defaultValue={product.name} />
                    <S.ErrorMessage>{errors?.name?.message}</S.ErrorMessage>
                </S.InputGroup>

                <S.InputGroup>
                    <S.Label>Preço</S.Label>
                    <S.Input
                        type='number' {...register('price')}
                        defaultValue={product.price / 100} />
                    <S.ErrorMessage>{errors?.price?.message}</S.ErrorMessage>
                </S.InputGroup>

                <S.InputGroup>
                    <S.LabelUpload>
                        <Image />
                        {fileName || 'Escolha uma imagem'}
                        <input
                            type='file'
                            {...register('file')}
                            accept='image/png, image/jpeg, image/jpg'
                            onChange={(e) => {
                                setFileName(e.target.files[0]?.name)
                                register('file').onChange(e)
                            }}
                        />
                    </S.LabelUpload>
                    <S.ErrorMessage>{errors?.file?.message}</S.ErrorMessage>
                </S.InputGroup>

                <S.InputGroup>
                    <S.Label>Categoria</S.Label>
                    <Controller
                        name='category'
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => (
                            <S.Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder='Selecione uma categoria'
                                menuPortalTarget={document.body}
                                defaultValue={product.category}
                            />
                        )}
                    />
                    <S.ErrorMessage>{errors?.category?.message}</S.ErrorMessage>
                </S.InputGroup>

                <S.InputGroup>
                    <S.ContainerCheckbox>
                        <input
                            type="checkbox"
                            defaultChecked={product.offer}
                            {...register('offer')} />
                        <S.Label> Produto em oferta?</S.Label>
                    </S.ContainerCheckbox>
                </S.InputGroup>
                <S.SubmitButton>
                    Editar produto
                </S.SubmitButton>
            </S.Form>
        </S.Container>
    )
}