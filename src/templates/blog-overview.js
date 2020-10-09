import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import styled from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
// import Closer from '../components/Closer'
import BlogOverview from '../components/BlogOverview'
import Fade from 'react-reveal/Fade'
// import Img from 'gatsby-image'
import Bg from '../components/Bg'

export const BlogOverviewPageTemplate = ({
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <div className='imageContainer' style={{ position: 'relative', height: '100%' }}>

        <Bg />
        {/*
        <Img
          fluid={image.childImageSharp.fluid}
          style={{
            width: '100%',
            height: '100vh',
            position: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        */}
      </div>
      <section className='section' style={{ position: 'relative' }}>
        <Fade>
          <BlogOverview />
        </Fade>
      </section>

    </>
  )
}

BlogOverviewPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const BlogOverviewPage = ({ data }) => {
  const { markdownRemark: post, footerData } = data

  return (
    <Layout footerData={footerData}>
      <BlogOverviewPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

BlogOverviewPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogOverviewPage

export const blogOverviewPageQuery = graphql`
  query BlogOverviewPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }

    ...LayoutFragment
  }
`
