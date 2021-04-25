import React from "react"
import { Link } from "gatsby"
import ShoppingCartIcon from '../ShoppingCartIcon'

import { Dropdown, Menu, Grid, Transition } from 'semantic-ui-react'

const DesktopMenu = ({ toggleVisibleCart }) => {
	return (
		<Menu compact stackable secondary size="tiny">
			<Menu.Item
				as={Link}
				to="/"
				className="heading"
			>
				Home
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
				to="/faq"
				className="heading"
			>
				FAQ
			</Menu.Item>
			<Menu.Item
				as={Link}
				to="/about"
				className="heading"
			>
				About Us
			</Menu.Item>
			<Menu.Item onClick={toggleVisibleCart}>
				<ShoppingCartIcon />
			</Menu.Item>
		</Menu>
	)
}

export default DesktopMenu
