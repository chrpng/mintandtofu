import React, { useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ShoppingCartIcon from './ShoppingCartIcon'

import { Menu, Grid } from 'semantic-ui-react'

import { StaticImage } from "gatsby-plugin-image"

import { BlankButton } from './Buttons.styles'
import DesktopMenu from './Menus/DesktopMenu'
import MobileMenu from './Menus/MobileMenu'

import styled from 'styled-components'

const StyledNav = styled.nav`
	text-align: center;
`

const Header = ({ siteTitle, toggleVisible }) => {
	const [ visibleMenu, setVisibleMenu ] = useState(true)

	const toggleVisibleMenu = () => {
		setVisibleMenu(!visibleMenu)
	}

	return (
		<StyledNav>
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
				<Menu.Item>
					<Grid verticalAlign="middle">
						<Grid.Row columns={1} only='mobile'>
							<Grid.Column>
								<div style={{ display: `flex`, alignItems: `center`, justifyContent: `flex-end` }}>
									<BlankButton onClick={toggleVisibleMenu}>
										{visibleMenu ? <i className="chevron down icon"></i> : <i className="bars icon"></i>}
									</BlankButton>
									<BlankButton onClick={toggleVisible}>
										<ShoppingCartIcon />
									</BlankButton>
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Menu.Item>
			</Menu>

			<Grid>
				<Grid.Row columns={1} only='mobile'>
					<Grid.Column>
						<MobileMenu visibleMenu={visibleMenu}/>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns={1} only='tablet computer'>
					<Grid.Column>
						<DesktopMenu toggleVisibleCart={toggleVisible}/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</StyledNav>
	)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
