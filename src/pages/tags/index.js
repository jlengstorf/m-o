import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Bg from '../../components/Bg'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <div className='imageContainer' style={{ position: 'relative', height: '100%' }}>

      <Bg />

    </div>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '4rem' }}
          >
            <h1 className="title is-size-2 has-text-inverted">Tags</h1>
            <div className="tags">
              {group.map(tag => (
                <span className='tag is-primary is-medium' key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className='columns'>
          <div className='column is-12 has-text-centered'>
            <Link className='button is-medium is-outlined is-primary' to='/blog'>zurück
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
