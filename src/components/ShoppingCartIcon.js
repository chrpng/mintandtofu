import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
// import { Image } from 'semantic-ui-react'
import { StaticImage } from "gatsby-plugin-image"

import styled from 'styled-components'

const CartCountProvider = styled.div`
	position: relative;

	.cart__badge {
		position: absolute;
		top: -8px;
		right: -8px;

		padding: 4px;
		font-size: 12px;

		background: red;
		color: white;
		border-radius: 4px;
	}
`

const ShoppingCartIcon = () => {
	const { cartCount } = useShoppingCart()
	// console.log(cartCount>0)
	return (
		<CartCountProvider cartCount={cartCount}>
			<StaticImage
				src="../images/shoppingcart-32px.svg"
				placeholder="blurred"
				width={32}
				quality={95}
				formats={["AUTO", "WEBP", "AVIF"]}
				alt="Mint and Tofu logo"
			/>
			{/* <div>Cart</div> */}
			{(cartCount > 0) ? <span className="cart__badge">{cartCount}</span> : null}
		</CartCountProvider>
	)
}
 
export default ShoppingCartIcon