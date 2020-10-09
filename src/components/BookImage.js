import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const BookImage = () => (
  <StaticQuery
    query={graphql`
      query {
        bookImage: file(relativePath: { eq: "book.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              presentationWidth
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.bookImage.childImageSharp.fluid}
      />
    )}
  />
)

export default BookImage
