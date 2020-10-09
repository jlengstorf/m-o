import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Bg from '../components/Bg'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <div className='tags' key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <span className="tag is-medium is-primary">{post.node.frontmatter.title}</span>
        </Link>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} Post${
      totalCount === 1 ? '' : 's'
    } gefunden mit “${tag}”`

    return (
      <Layout>
        <div className='imageContainer' style={{ position: 'relative', height: '100%' }}>

          <Bg />
          
        </div>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />

          <div className="container">
            <div className="columns">
              <div
                className="column"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title has-text-inverted">{tagHeader}</h3>
                <div className="tags">{postLinks}</div>
                <p>
                  <Link className='button is-primary' to="/tags/">Alle Tags durchsuchen</Link>
                </p>
              </div>
            </div>
            <div className='columns'>
              <div className='column is-12 has-text-centered'>
                <Link className='button is-medium is-primary' to='/tags'>zurück
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
