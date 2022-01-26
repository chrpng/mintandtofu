import * as React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/SEO'

import ProductMap from '../components/Products/ProductMap'

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <h3>All products</h3>
		<ProductMap />
  </React.Fragment>
)

export default IndexPage
