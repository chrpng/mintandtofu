import styled from 'styled-components'

import { Button as DefaultButton } from 'semantic-ui-react'

export const Button = styled(DefaultButton)`
	&& {
		font-size: 13px;
		outline: none;
		padding: 12px;
		box-shadow: 2px 5px 10px rgba(0,0,0,.1);
		letter-spacing: '1.5px',
		color: black !important;
		background-color: #fff !important;
		letter-spacing: 1.5px;
		border: 1px solid black !important;
		border-radius: 0 !important;
	}
`