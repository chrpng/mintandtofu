import React from 'react'

import styled from 'styled-components'

const StyledQuantityPicker = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 16px;

	button {
		background: white;
		border: 1px solid #aaaaaa;
		cursor: pointer;
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
			<button className="value" onClick={decrementFunction}>-</button>
			<div className="display-quantity value">{quantity}</div>
			<button className="value" onClick={incrementFunction}>+</button>
		</StyledQuantityPicker>
	)
}
 
export default QuantityPicker