import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {  // Cria o contexto.
    const [cartProducts, setCartProducts] = useState([]);

    const putProductInCart = (product) => {
        const cardIndex = cartProducts.findIndex((prd) => prd.id === product.id) // Verifica se o produto ja esta no carrinho.

        let newProductInCart = []

        if (cardIndex >= 0) {
            newProductInCart = cartProducts

            newProductInCart[cardIndex].quantity =
                newProductInCart[cardIndex].quantity + 1

            setCartProducts(newProductInCart)
        } else {
            product.quantity = 1
            newProductInCart = [...cartProducts, product]

            setCartProducts(newProductInCart)
        }
        updateLOcalStorage(newProductInCart)
    } // Adiciona o produto no carrinho.

    const clearCart = () => {  // Limpa o carrinho. 
        setCartProducts([])

        updateLOcalStorage([])
    }

    const deleteProduct = (productId) => {  // Deleta o item do carrinho.
        const newCart = cartProducts.filter((prd) => prd.id !== productId)

        setCartProducts(newCart)
        updateLOcalStorage(newCart)
    }

    const increaseProduct = (productId) => {  // Aumenta a quantidade do produto no carrinho.
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
        })
        setCartProducts(newCart)
        updateLOcalStorage(newCart)
    }

    const decreaseProduct = (productId) => {  // Diminui a quantidade do produto no carrinho.
        const cardIndex = cartProducts.findIndex((prd) => prd.id === productId)

        if (cartProducts[cardIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
            })

            setCartProducts(newCart)
            updateLOcalStorage(newCart)
        } else {
            deleteProduct(productId)
        }
    }

    const updateLOcalStorage = (product) => {
        localStorage.setItem('devburguer:cartInfo', JSON.stringify(product))
    } // Atualiza o localStorage.

    useEffect(() => {
        const clientCartData = localStorage.getItem('devburguer:cartInfo')
        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData))
        }
    }, [])

    return (
        <CartContext.Provider value={{ cartProducts, putProductInCart, clearCart, deleteProduct, increaseProduct, decreaseProduct, }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {  // Pega o contexto.
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart needs to be used inside a CartProvider');
    }
    return context
}
