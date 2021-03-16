import styled from 'styled-components'

import * as Semantic from 'semantic-ui-react'

export const Button = styled(Semantic.Button)`
	&& {
		box-sizing: border-box;
		font-size: 13px;
		outline: none;
		padding: 12px;
		box-shadow: 2px 5px 10px rgba(0,0,0,.1);
		letter-spacing: '1.5px',
		color: black;
		background-color: #fff;
		letter-spacing: 1.5px;
		border: 1px solid black;
		border-radius: 0;
		text-transform: uppercase;

		transition: 0.2s all ease-in;

		&:hover {
			background-color: #eeffee;
			box-shadow: 2px 5px 10px rgba(0,0,0,.1);
		}

		&:focus {
			background-color: inherit;
		}
	}
`

export const DarkButton = styled(Button)`
	&& {
		width: 100%;
		border: none;
		color: #fff;
		background-color: #666;
		
		&:hover {
			color: #fff;
			background-color: black;
		}
	}
`