import * as React from 'react'

import SEO from '../components/SEO'

import StickerMap from '../components/Products/StickerMap'

const StickersPage = () => (
  <React.Fragment>
    <SEO title="Stickers" />
    <h3>All stickers</h3>
		<StickerMap />
  </React.Fragment>
)

export default StickersPage
