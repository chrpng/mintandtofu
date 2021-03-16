import React from "react"

import styled from 'styled-components'

const StyledFooter = styled.footer`
	background-color: #e2f7e6;
	margin-top: 2rem;
	text-align: center;
	padding: 40px 0;

	.social-media {
		margin-top: 16px;
		font-size: 2em;
	}
`

const Footer = () => {
	return (
		<StyledFooter>
			© MINT AND TOFU {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.gatsbyjs.com">Gatsby</a>
			<div className="social-media">
				<i className="twitter icon"></i>
				<i className="instagram icon"></i>
			</div>
		</StyledFooter>
	)
}

export default Footer
 