import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
    'pk_test_51QYq46KPBk3fHkpK7tfLJr3lSON6JOjpYjxpQrWgFfnhYWGYzM6JLDpKaJYYkHLnyeUoyuWlnSLOGCtVZXbgTCAL00qq4r5prh'
)

export default stripePromise