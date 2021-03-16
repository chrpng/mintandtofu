import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import ProductMap from '../components/Products/ProductMap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>All products</h3>
		<ProductMap />
    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
