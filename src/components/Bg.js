import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Background = () => (
  <StaticQuery
    query={graphql`
      query {
        bgimage: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              presentationWidth
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.bgimage.childImageSharp.fluid}
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    )}
  />
)

export default Background
