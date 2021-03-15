import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(String(`${process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}`))

const CartProviderWrapper = ({ children }) => {
	return (
		<CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={`${window.location.origin}/page-2/`}
      cancelUrl={`${window.location.origin}/`}
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
    >
			{children}
		</CartProvider>
	);
}
 
export default CartProviderWrapper;