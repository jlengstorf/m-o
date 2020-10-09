import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ContactPanel from '../components/kontakt'
import Fade from 'react-reveal/Fade'
import Bg from '../components/Bg'

export const ContactPageTemplate = ({
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
          <ContactPanel />
        </Fade>
      </section>

    </>
  )
}

ContactPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post, footerData } = data

  return (
    <Layout footerData={footerData}>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }

    ...LayoutFragment
  }
`
