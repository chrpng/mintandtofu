import React from 'react'
import { Image } from 'semantic-ui-react'

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

import styled from 'styled-components'

import QuantityPicker from './QuantityPicker'

const StyledCartItemDiv = styled.div`
	display: flex;
	align-items: flex-start;

	padding: 16px 0;
	
	:not(:last-child) {
		border-bottom: 1px solid #aaaaaa;
	}

	.ui.image {
		margin-bottom: 0;
		margin-right: 8px;
	}

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
			<Image src={item.image[0]} alt={item.name} size='tiny'/>
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
					<div className="cart-item__cost value">
						{formatCurrencyString({ value: item.price, currency: 'USD' })}
					</div>
				</div>
			</div>
		</StyledCartItemDiv>
	)
}
 
export default CartItem