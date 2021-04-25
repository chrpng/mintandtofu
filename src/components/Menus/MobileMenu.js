import React from "react"
import { Link } from "gatsby"
import ShoppingCartIcon from '../ShoppingCartIcon'

import { Dropdown, Menu, Grid, Transition } from 'semantic-ui-react'

const MobileMenu = ({ visibleMenu }) => {
	return (
		<Transition visible={visibleMenu} duration={200} animation="fade down" unmountOnHide>
			<Menu
				secondary size="tiny" vertical fluid
			>
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
			</Menu>
		</Transition>
	)
}

export default MobileMenu
