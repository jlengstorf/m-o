import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
import Fade from 'react-reveal/Fade'
import Closer from '../components/Closer'
import Avatar from '../components/Avatar'
import Bg from '../components/Bg'
// import Img from 'gatsby-image'

export const ContactThanksPageTemplate = ({
  content,
  contentComponent,
  heading,
  message
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
        */}
      </div>
      <section className='section'>
        <div className='container' style={{ marginTop: '1rem', paddingTop: '100px', paddingBottom: '100px' }}>
          <Fade>
            <div className='columns is-centered'>
              <Panel className='column is-6 is-one-third-widescreen'>
                <Closer />
                <div className='column is-12 has-text-centered'>
                  <Avatar />
                </div>
                <div className='content'>
                  <h1 className='title is-3' style={{ color: '#fff' }}>{heading}</h1>
                  <p className='subtitle is-5'>{message}</p>
                </div>
                <Link className='button is-primary' to='/'>
                  zurück zur Hauptseite
                </Link>
              </Panel>
            </div>
          </Fade>
        </div>
      </section>
    </>
  )
}

ContactThanksPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const ContactThanksPage = ({ data }) => {
  const { markdownRemark: post, footerData } = data

  return (
    <Layout footerData={footerData}>
      <ContactThanksPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        heading={post.frontmatter.heading}
        message={post.frontmatter.message}
      />
    </Layout>
  )
}

ContactThanksPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ContactThanksPage

export const contactThanksPageQuery = graphql`
  query ContactThanksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        heading
        message
      }
    }
    ...LayoutFragment
  }
`

const Panel = styled.div`
  border-radius: 3px;
  background: -moz-linear-gradient(120deg, rgba(0,0,0,1) 0%, rgba(0,400,0,0.5) 100%);
  background: -webkit-linear-gradient(120deg, rgba(0,0,0,1 ) 0%,rgba(0,400,0,0.5) 100%);
  background: linear-gradient(120deg, rgba(0,0,0,1) 0%,rgba(0,400,0,0.5) 100%);
  box-shadow: 0 0 15px rgba(0,0,0,.6);
  padding: 32px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;
`
