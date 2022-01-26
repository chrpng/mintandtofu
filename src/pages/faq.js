import * as React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/SEO'

// import ProductMap from '../components/Products/ProductMap'

const NewsPage = () => (
  <React.Fragment>
    <SEO title="FAQ" />
    <h3>FAQ</h3>
		<h4>When will my order ship?</h4>
		<div>
			Typically, we ship 2-3 days after your order is received. Processing time may be longer during the holiday season, so please bear with us! For pre-orders, please refer to the listing details.
		</div>

		<h4>I have an issue with my order. What should I do?</h4>
		<div>
			Please contact us at <strong>mintandtofu@gmail.com</strong>.
		</div>
  </React.Fragment>
)

export default NewsPage
