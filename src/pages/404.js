import React from 'react'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import Bg from '../components/Bg'

export const NotFoundPageTemplate = ({
  home
}) => {
  return (
    <Layout>
      <div className='imageContainer' style={{ position: 'relative', height: '100vh' }}>

        <Bg />
        {/*
        <Img
          fluid={home.image.childImageSharp.fluid}
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
      <section className='hero is-small' style={{ position: 'absolute', top: '25%', marginLeft: 'auto', right: '0', width: '100%' }}>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-centered'>NOT FOUND</h1>
            <h2 className='subtitle has-text-centered has-text-white-ter'>Diese Seite existiert leider nicht.</h2>
            <div className='columns'>
              <div className='column is-12 has-text-centered'>
                <Link className='button is-medium is-outlined is-primary' to='/'>zurück zur Hauptseite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

class HomePage extends React.Component {
  render () {
    const { data } = this.props
    const {
      data: { footerData }
    } = this.props
    const { frontmatter: home } = data.homePageData.edges[0].node

    return (
      <Layout footerData={footerData}>
        <NotFoundPageTemplate home={home} />
      </Layout>
    )
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default HomePage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            mainpitch {
              title
              subtitle
            }
          }
        }
      }
    }
    ...LayoutFragment
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            mainpitch {
              title
              subtitle
            }
          }
        }
      }
    }
  }
`
