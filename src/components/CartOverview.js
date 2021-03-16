import React, { useState } from 'react'

import { DarkButton } from './Buttons.styles'
import CartItem from './CartItem'
import { useShoppingCart } from 'use-shopping-cart'

import styled from 'styled-components'

const StyledCart = styled.div`
	padding: 32px;
	display: flex;
	flex-flow: column;
	height: 100vh;
	
	h2 {
		border-bottom: 1px solid #aaaaaa;
		padding: 32px 0;
		margin-bottom: 0;
	}

	.cart-section {
		flex: 1 1 auto;
		overflow-y: auto;
	}

	.checkout-section {
		padding: 16px 0;
		flex: 0 1 100px;
		border-top: 1px solid #aaaaaa;
	}
`

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
  } = useShoppingCart()
	
	const cartDetailsArray = Object.values(cartDetails)
	// console.log(cartDetailsArray)

  return (
    <StyledCart>
			<h2>CART</h2>
			<div className="cart-section">
				{cartDetailsArray.map((item) => <CartItem key={item.id} item={item} />)}
			</div>
			<div className="checkout-section">
				{/* <p>Subtotal: {formattedTotalPrice}</p> */}
				<p>Shipping and taxes will be calculated at checkout.</p>

				<DarkButton
					style={loading ? buttonDisabledStyles : null}
					disabled={loading}
					onClick={() => {
						setLoading(true)
						redirectToCheckout()
					}}
				>
					{loading ? 'Loading...' : 'Checkout'}
				</DarkButton>
			</div>
    </StyledCart>
  )
}

export default Cart