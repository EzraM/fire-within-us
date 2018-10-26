import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

import styles from './styles.module.css'

const BackgroundImage = () => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "fire-background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.background}>
        <Img fluid={data.background.childImageSharp.fluid} />
      </div>
    )}
  />
)

export default BackgroundImage
