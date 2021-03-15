import React, { useState } from 'react'

import { Button } from 'semantic-ui-react'
import CartItem from './CartItem'
import { useShoppingCart } from 'use-shopping-cart'

import styled from 'styled-components'

const StyledCart = styled.div`
	padding: 16px 8px;
	display: flex;
	flex-flow: column;
	height: 100vh;

	.cart-section {
		flex: 1 1 auto;
		overflow-y: auto;
	}

	.checkout-section {
		flex: 0 1 100px;
	}
`

const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
		cartDetails,
    formattedTotalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
  } = useShoppingCart()
	
	const cartDetailsArray = Object.values(cartDetails)
	console.log(cartDetailsArray)

  return (
    <StyledCart>
			<div className="cart-section">
				{/* This is where we'll render our cart */}
				{
					cartDetailsArray.map((item) => <CartItem key={item.id} item={item} />)
				}
				<Button style={buttonStyles} onClick={clearCart}>
					Clear cart
				</Button>
			</div>
			<div className="checkout-section">
				<p>Subtotal: {formattedTotalPrice}</p>
				<p>Shipping and taxes will be calculated at checkout uwu</p>

				{/* Redirects the user to Stripe */}
				<Button
					style={loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles}
					disabled={loading}
					onClick={() => {
						setLoading(true)
						redirectToCheckout()
					}}
				>
					{loading ? 'Loading...' : 'Checkout'}
				</Button>
			</div>
    </StyledCart>
  )
}

export default Cart