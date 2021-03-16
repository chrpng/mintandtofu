import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ShoppingCartIcon from './ShoppingCartIcon'

import { Menu } from 'semantic-ui-react'

import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle, toggleVisible }) => (
	<nav style={{ textAlign: `center` }}>
		<Menu
			style={{
				color: `#cef3c6`,
				marginBottom: `0`
			}}
			secondary
			widths={3}
		>
			<Menu.Item></Menu.Item>
			<Menu.Item
				as={Link}
				to="/"
				fitted
				>
				<StaticImage
					src="../images/mintofuheader.png"
					placeholder="blurred"
					width={300}
					quality={95}
					formats={["AUTO", "WEBP", "AVIF"]}
					alt="Mint and Tofu logo"
					/>
			</Menu.Item>
			<Menu.Item></Menu.Item>
		</Menu>
		<Menu compact>
			<Menu.Item
				as={Link}
				to="/"
				className="heading"
			>
				Home
			</Menu.Item>
			<Menu.Item
				as={Link}
				to="/news"
				className="heading"
			>
				News
			</Menu.Item>
			<Menu.Item
				as={Link}
				to="/stickers"
				className="heading"
			>
				Stickers
			</Menu.Item>
			<Menu.Item
				as={Link}
				to="/about"
				className="heading"
			>
				About Us
			</Menu.Item>
			<Menu.Item onClick={toggleVisible}>
				<ShoppingCartIcon />
			</Menu.Item>
		</Menu>
	</nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
