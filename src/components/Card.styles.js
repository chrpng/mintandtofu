import styled from 'styled-components'

import * as Semantic from 'semantic-ui-react'

export const Card = styled(Semantic.Card)`
	&&& {
		.ui.image {
			height: 0;
			padding-bottom: 100%;
			background-color: rgba(151, 235, 83, 0.05);

			img {
				transition: 0.5s transform ease-in-out;

				&:hover {
					transform: scale(1.1)
				}
			}
		}
	}
`