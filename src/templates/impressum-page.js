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

export const ImpressumPageTemplate = ({
  content,
  contentComponent,
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
      <section className='section'>
        <div className='container' style={{ marginTop: '1rem', paddingTop: '100px', paddingBottom: '100px' }}>
          <div className='columns'>
            <Fade>
              <Panel className='column is-10 is-offset-1'>
                <Closer />
                <PageContent className='content has-text-white-ter has-hyphens link' content={content} />
                <div className='container'>
                  <div className='columns'>
                    <div className='column has-text-centered'>
                      <Link className='button is-medium is-outlined is-primary' to='/'>zurück
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

ImpressumPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const ImpressumPage = ({ data }) => {
  const { markdownRemark: post, footerData } = data

  return (
    <Layout footerData={footerData}>
      <ImpressumPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

ImpressumPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ImpressumPage

export const impressumPageQuery = graphql`
  query ImpressumPage($id: String!) {
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
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;
`

// const Bg = styled.section`
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   background: url(${bg});
//   width: 100%;
//   height: auto;
//   // position: scroll;
// `
