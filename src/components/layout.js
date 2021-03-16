/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import CartOverview from "./CartOverview"
// import CartProviderWrapper from './CartProviderWrapper'

import { Sidebar } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import "./layout.css"

const Layout = ({ children }) => {
	const [visible, setVisible] = React.useState(false)

	const toggleVisible = () => setVisible(!visible)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
		<Sidebar.Pushable style={{ transform: `none` }}> {/* for sticky sidebar: transform changes positioning context to parent container, removing sets context to viewport*/}
			<Sidebar
				animation='overlay'
				direction='right'
				onHide={() => setVisible(false)}
				visible={visible}
				width='wide'
				style={{ backgroundColor: `white`, transitionDuration: `0.2s`, transitionTimingFunction: `ease-out` }}
			>
				<CartOverview />
			</Sidebar>

			<Sidebar.Pusher dimmed={visible}>
				<Header siteTitle={data.site.siteMetadata?.title || `Title`} toggleVisible={toggleVisible}/>
				<div
					style={{
						margin: `0 auto`,
						maxWidth: 960,
						padding: `1.0875rem 1.45rem`,
					}}
				>
					<div 
						style={{
							display: `flex`,
							alignItems: `flex-start`
						}}
					>
						<main>{children}</main>
					</div>

				</div>
				<Footer />
			</Sidebar.Pusher>
		</Sidebar.Pushable>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
