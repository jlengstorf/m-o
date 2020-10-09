import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import Img from 'gatsby-image'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Share from '../components/Share'
import { Location } from '@reach/router'
import PreviewCompatibleImageFluid from '../components/PreviewCompatibleImageFluid'
import PreviewCompatibleImageFluidBg from '../components/PreviewCompatibleImageFluidBg'
import Bg from '../components/Bg'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  blogimage,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content

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
          alt: title + ' ' + 'Bild'
        }}
        />
        */}
      </div>
      <section id='blogPost' className='section'>
        {helmet || ''}
        <div className='container' style={{ marginTop: '1rem', paddingTop: '100px', paddingBottom: '100px' }}>
          <Fade>
            <div className='columns is-multiline is-centered'>
              <Panel className='column is-6'>

                <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
                  {title}
                </h1>
                {/*
                <Img fluid={blogimage.childImageSharp.fluid}
                />
                */}
                <PreviewCompatibleImageFluid imageInfo={{
                  image: blogimage,
                  alt: title + ' ' + 'Bild'
                }}
                />
              <PostContent content={content} className='has-text-white-ter has-hyphens' />
                <Location>
                  {({ location }) => {
                    const domain = 'https://www.military-optics.at'
                    const path = location.pathname
                    const url = domain + path
                    return <React.Fragment>
                      <Share title={title} url={url} />
                    </React.Fragment>
                  }}
                </Location>
                {tags && tags.length ? (
                  <div style={{ marginTop: `4rem` }}>
                    <h4 style={{ color: '#fff' }}>Tags</h4>
                    <div className='tags'>
                      {tags.map(tag => (
                        <span className='tag is-primary is-medium' key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </Panel>
            </div>
          </Fade>
          <div className='columns'>
            <div className='column is-12 has-text-centered'>
              <Link className='button is-primary' to='/#blog'>zurück
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

BlogPostTemplate.propTypes = {
  blogimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post, footerData } = data

  return (
    <Layout footerData={footerData}>
      <BlogPostTemplate
        blogimage={post.frontmatter.blogimage}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Blog'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        blogimage {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
    ...LayoutFragment
  }
`

const Panel = styled.div`
  border-radius: 3px;
  background: rgba(0,0,0,0.9);
  box-shadow: 0 0 15px rgba(0,0,0,.6);
  padding: 32px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;
`
