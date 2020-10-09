import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Closer from '../components/Closer'
import Fade from 'react-reveal/Fade'
// import PreviewCompatibleImageFluidBg from '../components/PreviewCompatibleImageFluidBg'
// import Img from 'gatsby-image'
import Bg from '../components/Bg'

export const DatenschutzPageTemplate = ({
  content,
  contentComponent,
  title,
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <div className='imageContainer' style={{ position: 'relative', height: '100%' }}>

        <Bg />
        {/*
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

DatenschutzPageTemplate.propTypes = {
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string

}

const DatenschutzPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DatenschutzPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

DatenschutzPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default DatenschutzPage

export const pageQuery = graphql`
query DatenschutzPageTemplate($id: String!) {
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
