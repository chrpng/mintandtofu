import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
// import { Image } from 'semantic-ui-react'
import { StaticImage } from "gatsby-plugin-image"

import styled from 'styled-components'

const CartCountWrapper = styled.div`
	div {
		display: inline-block;
		position: relative;

		.cart__badge {
			position: absolute;
			top: -8px;
			right: -8px;
	
			padding: 1px 4px;
			font-size: 12px;
	
			background: red;
			color: white;
			border-radius: 4px;
		}
	}
`

const ShoppingCartIcon = () => {
	const { cartCount } = useShoppingCart()
	// console.log(cartCount>0)
	return (
		<CartCountWrapper cartCount={cartCount}>
			<div>
				<StaticImage
					src="../images/shoppingcart-32px.svg"
					placeholder="blurred"
					width={32}
					quality={95}
					formats={["AUTO", "WEBP", "AVIF"]}
					alt="Mint and Tofu logo"
					/>
				{/* <i className="shopping cart icon heading"></i> */}
				{(cartCount > 0) ? <span className="cart__badge">{cartCount}</span> : null}
			</div>
		</CartCountWrapper>
	)
}
 
export default ShoppingCartIcon