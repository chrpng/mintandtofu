import React from 'react'
import {graphql} from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
// import get from 'lodash/get'

// import ProductSummary from '../components/ProductSummary'
// import ProductAttributes from '../components/ProductAttributes'

// class ProductPageTemplate extends React.PureComponent {
//   render() {
//     const productInfo = get(this, 'props.data.allMoltinProduct')
//     const data = productInfo.edges[0].node
//     const slug = data.slug
//     const image = get(data, 'mainImageHref')
//     const sizes = get(data, 'mainImage.childImageSharp.sizes')
//     const product = {
//       ...data,
//       id: data.id,
//       image,
//       mainImage: data.mainImage,
//       header: data.name,
//       meta: data.meta,
//       sku: data.sku,
//     }

//     if (!sizes) return null

//     return (
//       <Layout location={this.props.location}>
//         <SEO title={slug} />
//         <ProductSummary {...product} />
//         <ProductAttributes {...product} />
//       </Layout>
//     )
//   }
// }

const ProductPageTemplate = ({ data }) => {
	const {stripePrice} = data
	const product = {
		name: stripePrice.product.name,
		description: stripePrice.product.description
	}

  return (
    <Layout>
			<SEO title={stripePrice.product.name} />
      <h1>{product.name}</h1>
			<div>{product.description}</div>
    </Layout>
  )
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query PageById($uid: String!) {
    stripePrice(id: {eq: $uid }) {
			id
			active
			currency
			unit_amount
			product {
				id
				name
				images
				description
			}
		}
  }
`
