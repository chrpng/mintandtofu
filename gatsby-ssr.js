/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'

import Layout from './src/components/Layout'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(String(`${process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}`))

export const wrapRootElement = ({ element }) => {
	return (
		<CartProvider
			mode="client-only"
			stripe={stripePromise}
			successUrl="/dummy/"
			cancelUrl="/dummy2/"
			currency="USD"
			allowedCountries={['US', 'GB', 'CA']}
			billingAddressCollection={true}
		>
			{element}
		</CartProvider>
	)
}

export const wrapPageElement = ({ element }) => {
	return (
		<Layout>
			{element}
		</Layout>
	)
}