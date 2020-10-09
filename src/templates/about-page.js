import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
import Closer from '../components/Closer'
import Fade from 'react-reveal/Fade'
// import Img from 'gatsby-image'
// import PreviewCompatibleImageFluidBg from '../components/PreviewCompatibleImageFluidBg'
import Bg from '../components/Bg'

export const AboutPageTemplate = ({
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
          fluid={bgimage.childImageSharp.fluid}
          style={{
            width: '100%',
            height: '100vh',
            position: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <PreviewCompatibleImageFluidBg imageInfo={{
          image: bgimage,
          alt: 'Bild'
        }}
        />
        */}
      </div>
      <section className='section' style={{ position: 'relative' }}>
        <div className='container'>
          <div className='columns'>
            <Fade>
              <Panel className='column is-10 is-offset-1'>
                <Closer />
                <PageContent className='content has-text-white-ter' content={content} />
                <div className='container'>
                  <div className='columns'>
                    <div className='column has-text-centered'>
                      <Link className='button is-medium is-outlined is-primary' to='/kontakt'>Kontakt aufnehmen
                      </Link>
                    </div>
                  </div>
                </div>
              </Panel>
            </Fade>
          </div>
        </div>
      </section>

    </>
  )
}

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post, footerData } = data

  return (
    <Layout footerData={footerData}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
