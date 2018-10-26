import React from 'react'

import Helmet from 'react-helmet'
import Intro from '../components/Intro'
import ShareYourFire from '../components/ShareYourFire'
import BottomImage from '../components/BottomImage'

const IndexPage = () => (
  <div>
    <Helmet title="The Fire Within Us" />

    <Intro />

    <ShareYourFire />

    <BottomImage />
  </div>
)

export default IndexPage
