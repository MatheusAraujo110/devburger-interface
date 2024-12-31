import { Elements } from "@stripe/react-stripe-js"
import { useLocation } from "react-router-dom"

import { CheckoutForm } from "../../components"

import stripePromise from "../../config/stripeConfig"

export function Checkout() {  // export function => exportar para outros lugares; function => cria uma função. 
    const {
        state: { clientSecret },  // Pega o clientSecret do checkout.
    } = useLocation()  // Pega o state do checkout.

    console.log(clientSecret)

    if(!clientSecret) {  // Se clientSecret for falso.
        return <div>Erro, volte e tente novamente</div>
    }


    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
        </Elements>
    )
}
export default Checkout