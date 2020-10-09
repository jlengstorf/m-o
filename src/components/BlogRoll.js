import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql, StaticQuery } from 'gatsby'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'
// import PreviewCompatibleImageFluid from '../components/PreviewCompatibleImageFluid'

class BlogRoll extends React.Component {
  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <section id='news' className='section' style={{ background: 'rgba(0,0,0,0.9)', position: 'relative' }}>
        <div className='container'>
          <div className='columns is-multiline is-centered'>
            <div className='column is-12 has-text-centered'>
              <div style={{ position: 'relative' }}>
                <h1 className='title is-2 has-text-primary' style={{ marginBottom: '3rem' }}>Neuigkeiten</h1>
                <div className='headline' />
              </div>
            </div>

            {posts && (posts
              .map(({ node: post }) => (
                <div
                  className='is-parent column is-4'
                  key={post.id}
                >
                  <Fade>
                    <Entry style={{ padding: '0', boxShadow: '0 0 10px rgba(0,0,0,.5)', maxWidth: '300px', margin: '0 auto' }}>
                      <div style={{ position: 'relative' }}>
                        <Link className='title is-size-4 text-shadow' style={{ position: 'absolute', width: '100%', color: 'white', background: 'rgba(0,0,0,.9)', padding: '15px', overflow: 'hidden', zIndex: '2000' }} to={post.fields.slug}>
                          {post.frontmatter.title}
                          <div className='hoverLine'></div>
                        </Link>
                        <Link to={post.fields.slug}>
                          {/*
                          {console.log(post.frontmatter.blogimage.childImageSharp.fluid)}
                          */}
                          <Img
                            fluid={post.frontmatter.blogimage.childImageSharp.fluid} alt={post.frontmatter.title}
                            style={{ width: '100%' }}
                          />

                          {/*
                          <PreviewCompatibleImageFluid imageInfo={{
                            image: post.frontmatter.blogimage,
                            alt: post.frontmatter.title + ' ' + 'Bild'
                          }}
                          />
                          */}

                        </Link>
                      </div>
                      <p style={{ padding: '10px', hyphens: 'auto', textAlign: 'justify', color: 'white' }}>
                        {post.excerpt}
                        <br />
                        <br />
                        <Link className='button is-normal is-primary' to={post.fields.slug}>
                        weiterlesen →
                        </Link>
                      </p>
                    </Entry>
                  </Fade>
                </div>
              )))}

          </div>
        </div>


      </section>

    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        limit: 3,
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 100)
            id
            fields {
              slug
            }
            frontmatter {
              blogimage {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 92) {
                    ...GatsbyImageSharpFluid_withWebp
                    presentationWidth
                  }
                }
              }
              title
              templateKey
              date(formatString: "DD.MM.YYYY")
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <BlogRoll data={data} count={count} />
    )}
  />
)

const Entry = styled.article`
  &:hover {
    box-shadow: 0 0 20px rgba(0,0,0,.5);
    transform: scale(1.02);
    transition: all 0.3s ease;
    .hoverLine {
      // background: linear-gradient(to right, #FF0000 0%, #F30C00 100%) !important;
      background: linear-gradient(to right, #347738 10%, #A39976 30%, #347738 50%, #A39976 70%, #347738 90% ) !important;
      height: 4px;
      width: 110%;
      opacity: 1;
      transition: width 1s;
      transition-timing-function: cubic-bezier(.455,.03,.515,.955);
    }
  }
  .headline:after {
    position: absolute;
    width: 66px;
    margin-left: -33px;
    left: 50%;
    height: 4px;
    bottom: -15px;
    background: linear-gradient(to right, #FF0000 0%, #F30C00 100%);
    box-shadow: 0 0 5px rgba(0,0,0,.5);
    border-radius: 3px;
    content: "";
    display: block;
  }
  .hoverLine {
    position: absolute;
    bottom: 0;
    left: -15px;
    width: 0%;
    background: transparent;
  }
`
