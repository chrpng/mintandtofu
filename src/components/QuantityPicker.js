import React from 'react'

import styled from 'styled-components'

const StyledQuantityPicker = styled.div`
	display: flex;
	width: 100%;

	button {
		background: white;
		border: 1px solid #aaaaaa;
	}

	.display-quantity {
		flex-grow: 1;
		text-align: center;
		border-top: 1px solid #aaaaaa;
		border-bottom: 1px solid #aaaaaa;
	}
`

const QuantityPicker = ({ decrementFunction, incrementFunction, quantity }) => {
	return (
		<StyledQuantityPicker>
			<button onClick={decrementFunction}>-</button>
			<div className="display-quantity">{quantity}</div>
			<button onClick={incrementFunction}>+</button>
		</StyledQuantityPicker>
	)
}
 
export default QuantityPicker