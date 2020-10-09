import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 60) {
              ...GatsbyImageSharpFixed
        }
      }
    }
      }
      `}
    render={data => (
      <Img fixed={data.file.childImageSharp.fixed}
        objectFit='cover'
        objectPosition='50% 50%'
        alt='Logo'
      />
    )}
  />
)

export default Logo
