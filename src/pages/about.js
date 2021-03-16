import * as React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { StaticImage } from "gatsby-plugin-image"

import { Grid } from "semantic-ui-react"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Grid textAlign="center">
			<Grid.Row columns={1}>
				<h3>About</h3>
				<p>We are Mint and Tofu, a pair of independent illustrators based out of the northeastern United States. We hope we can bring to you the gift of cute accessories to brighten up your day! All orders are handled in our home studio.</p> 
			</Grid.Row>
			<Grid.Row columns={3} textAlign="center" verticalAlign="middle">
				<Grid.Column>
					<div>Tofu</div>
					<div><em>Artist, Web Developer</em></div>
				</Grid.Column>
				<Grid.Column>
					<StaticImage
						src="../images/aboutpic.png"
						placeholder="blurred"
						width={300}
						quality={95}
						formats={["AUTO", "WEBP", "AVIF"]}
						alt="Mint and Tofu logo"
					/>
				</Grid.Column>
				<Grid.Column>
					<div>Mint</div>
					<div><em>Artist, Social Media</em></div>
				</Grid.Column>
			</Grid.Row>
    </Grid>
  </Layout>
)

export default AboutPage
