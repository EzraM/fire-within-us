import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

export default function BottomImage() {
  return (
    <StaticQuery
      query={graphql`
        query {
          background: file(relativePath: { eq: "blue-bottom.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.background.childImageSharp.fluid} />}
    />
  )
}
