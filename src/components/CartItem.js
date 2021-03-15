import React from 'react'
import { Image } from 'semantic-ui-react'

import { useShoppingCart } from 'use-shopping-cart'

import styled from 'styled-components'

import QuantityPicker from './QuantityPicker'

const StyledCartItemDiv = styled.div`
	display: flex;
	align-items: flex-start;

	.cart-item {
		width: 100%;
		
		.cart-item__name {
			margin-top: 12px;
		}

		.cart-item__monetary {
			display: flex;
			margin-top: 4px;
			
			.cart-item__quantity {
				flex-basis: 50%;
			}
			
			.cart-item__cost {
				margin-left: auto;
			}
		}
	}
`

const CartItem = ({ item }) => {
  const {
		incrementItem,
		decrementItem
  } = useShoppingCart()

	return (
		<StyledCartItemDiv>
			<Image src={item.image[0]} alt={item.name} size='tiny' style={{ marginBottom: '0' }}/>
			<div className="cart-item">
				<div className="cart-item__name">
					{item.name}
				</div>
				<div className="cart-item__monetary">
					<div className="cart-item__quantity">
						<QuantityPicker
							decrementFunction={() => decrementItem(item.id)}
							incrementFunction={() => incrementItem(item.id)}
							quantity={item.quantity}
						/>
					</div>
					<div className="cart-item__cost">
						${(item.price * item.quantity / 100).toFixed( 2 )}
					</div>
				</div>
			</div>
		</StyledCartItemDiv>
	)
}
 
export default CartItem