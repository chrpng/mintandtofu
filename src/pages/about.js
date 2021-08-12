import * as React from 'react'
import SEO from '../components/SEO'
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const CustomGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	text-align: center;
	align-items: center;

	padding: 16px 0;
	row-gap: 32px;

	.about-description {
		grid-column: 1 / -1;
	}

	@media (max-width: 790px) {
		grid-template-columns: 1fr 1fr;

		.about-image {
			order: 3;
			grid-column: 1 / -1;
		}
	}
`

const AboutPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    
		<CustomGrid>
			<div className="about-description">
				<h3>About</h3>
				<p>We are Mint and Tofu, a pair of independent illustrators based out of the northeastern United States. We hope we can bring to you the gift of cute accessories to brighten up your day! All orders are handled in our home studio.</p> 
			</div>
			<div>
				<div>Tofu</div>
				<div><em>Artist, Web Dev</em></div>
			</div>
			<div className="about-image">
				<StaticImage
					src="../images/aboutpic.png"
					placeholder="blurred"
					width={300}
					quality={95}
					formats={["AUTO", "WEBP", "AVIF"]}
					alt="Mint and Tofu logo"
				/>
			</div>
			<div>
				<div>Mint</div>
				<div><em>Artist, Social Media</em></div>
			</div>
		</CustomGrid>
  </React.Fragment>
)

export default AboutPage
