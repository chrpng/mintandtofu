import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ShoppingCartIcon from './ShoppingCartIcon'

import { Menu } from 'semantic-ui-react'

import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle, toggleVisible }) => (
  <Menu
    style={{
			backgroundColor: `#f8f7e2`,
			marginBottom: `0`
    }}
		pointing
		secondary
  >
		<Menu.Item
			as={Link}
			to="/"
			style={{
				color: `black`,
				textDecoration: `none`,
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<StaticImage
				src="../images/mintofu3.png"
				placeholder="blurred"
				width={100}
				quality={95}
				formats={["AUTO", "WEBP", "AVIF"]}
				alt="Mint and Tofu logo"
			/>
			{siteTitle}
		</Menu.Item>
		<Menu.Menu position='right'>
			<Menu.Item>
				About Us
			</Menu.Item>
			<Menu.Item onClick={toggleVisible}>
				<ShoppingCartIcon />
			</Menu.Item>
		</Menu.Menu>
  </Menu>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
