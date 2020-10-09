import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
// import Closer from '../components/Closer'
import OptikenOverview from '../components/OptikenOverview'
import Fade from 'react-reveal/Fade'
// import Img from 'gatsby-image'
import Bg from '../components/Bg'

export const OptikenOverviewPageTemplate = ({
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
          <OptikenOverview />
        </Fade>
      </section>

    </>
  )
}

OptikenOverviewPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const OptikenOverviewPage = ({ data }) => {
  const { markdownRemark: post, footerData } = data

  return (
    <Layout footerData={footerData}>
      <OptikenOverviewPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

OptikenOverviewPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default OptikenOverviewPage

export const optikenOverviewPageQuery = graphql`
  query OptikenOverviewPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }

    ...LayoutFragment
  }
`

const Panel = styled.div`
  border-radius: 3px;
  background: rgba(0,0,0,0.7);
  box-shadow: 0 0 15px rgba(0,0,0,.6);
  padding: 32px;
  margin-top: 4rem;
  margin-bottom: 2rem;
  position: relative;
`
