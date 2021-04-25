/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
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
			successUrl={`${window.location.origin}/thankyou/`}
			cancelUrl={`${window.location.origin}/`}
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