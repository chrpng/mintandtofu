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
	
	.cart-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #aaaaaa;
		padding: 32px 0;
		margin-bottom: 0;
	}

	.close {
		cursor: pointer;
		color: #666;
		
		&:hover {
			color: black;
		}
	}

	.cart-section {
		flex: 1 1 auto;
		overflow-y: auto;
		margin-left: -32px;
		margin-right: -32px;
		padding-left: 32px;
		padding-right: 32px;
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

const Cart = ({ toggleVisible }) => {
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
			<div className="cart-header">
				<h2>CART</h2>
				<div onClick={toggleVisible}><i className="close icon large"></i></div>
			</div>
			<div className="cart-section">
				{cartDetailsArray.map((item) => <CartItem key={item.id} item={item} />)}
			</div>
			<div className="checkout-section">
				<p className="value">SUBTOTAL: {formattedTotalPrice}</p>
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