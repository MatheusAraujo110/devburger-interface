import axios from "axios";

export const api = axios.create({ // export const => exportar para outros lugares; create => criar conexão para outros lugares.
    baseURL: 'http://localhost:3001', // integração do front com o back. Vê em qual porta está rodando no back e passar para o baseURL.
})

api.interceptors.request.use((config) => {
    const userData = localStorage.getItem('devburguer:userData')

    const token = userData && JSON.parse(userData).token

    config.headers.Authorization = `Bearer ${token}`

    return config
}) 