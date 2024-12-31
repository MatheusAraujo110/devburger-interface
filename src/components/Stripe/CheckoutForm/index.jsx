import { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";

import "./style.css";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const {
    state: { dpmCheckerLink },
  } = useLocation();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe ou elementos não estão carregados.");
      toast.error("Erro ao processar o pagamento. Tente novamente.");
      return;
    }

    setIsLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

      if (error) {
        console.error("Erro no pagamento:", error.message);
        setMessage(error.message);
        toast.error(error.message);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        await handleOrderSuccess(paymentIntent);
      } else {
        console.error("Falha no pagamento: PaymentIntent inválido ou não confirmado.");
        toast.error("Pagamento falhou. Tente novamente.");
      }
    } catch (err) {
      console.error("Erro inesperado:", err);
      toast.error("Erro inesperado durante o pagamento.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOrderSuccess = async (paymentIntent) => {
    try {
      const products = cartProducts.map((product) => ({
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      }));

      const { status } = await api.post(
        "/orders",
        { products },
        { validateStatus: () => true }
      );

      if (status === 200 || status === 201) {
        navigate(
          `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`
        );
        clearCart();
        toast.success("Pedido realizado com sucesso!");
      } else if (status === 400 || status === 409) {
        toast.error("Erro ao realizar o pedido. Tente novamente.");
      } else {
        throw new Error("Erro inesperado ao processar o pedido.");
      }
    } catch (error) {
      console.error("Erro ao registrar o pedido:", error);
      toast.error("Falha no sistema. Tente novamente.");
    }
  };

  const paymentElementOptions = {
    layout: "accordion",
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pague agora"}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
      <div id="dpm-annotation">
        <p>
          Os métodos de pagamento são disponibilizados de acordo com a sua região.&nbsp;
          <a
            href={dpmCheckerLink}
            target="_blank"
            rel="noopener noreferrer"
            id="dpm-integration-checker"
          >
            Ver métodos de pagamento
          </a>
        </p>
      </div>
    </div>
  );
}
