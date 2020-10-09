import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fixed(width: 100) {
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
        style={{ borderRadius: '50%', verticalAlign: 'middle', width: '100px', height: '100px' }}
      />
    )}
  />
)

export default Avatar
