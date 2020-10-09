import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import PreviewCompatibleImageFluid from '../components/PreviewCompatibleImageFluid'

const Optik = styled.article`
  &:hover {
    transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-10deg);
    transition: 0.7s ease;
    box-shadow: 200px 200px 200px rgba(255,244,255,1);
    // transform: scale(1.02);
    // transition: all 0.3s ease;
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

  .room-link {
    position: absolute;
    z-index: 2000;
    top: 50%;
    left: 50%;
    transform: scale(0);
    transition: all 0.3s linear;
  }

  .img-container{
    // min-height: 200px;
    // max-height: 170px;
    // background: #fff;
  }

  .img-container .room-link:hover {
    transform: translate(-50%, -50%) scale(1);
  }

  .img-container:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  .img-container:hover .image {
    opacity: 0.3;
  }

  .img-container:hover .room-link {
    transform: translate(-50%, -50%) scale(1);
  }
`

class Optiken extends React.Component {
  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <section id='optiken' className='section' style={{ background: 'rgba(0,0,0,0.9)', position: 'relative' }}>
        <div className='container'>
          <div className='columns is-multiline is-centered'>

            {posts && (posts
              .filter(({ node: post }) => (post.frontmatter.featured === 'Ja')).map(({ node: post }) => (
                <div
                  className='is-parent column is-4'
                  key={post.id}
                >
                  <Fade>
                    <Optik
                      style={{ padding: '0', maxWidth: '350px', margin: '0 auto' }}
                    >
                      <Link to={post.fields.slug}>
                        <div style={{ position: 'relative' }}>
                          <div className='img-container'>
                            <div
                              className='title is-size-4 has-text-centered is-uppercase'
                              style={{ position: 'absolute', zIndex: '3000', width: '100%', background: 'rgba(0,0,0,.8)', padding: '15px', overflow: 'hidden' }}
                            >
                              {post.frontmatter.title}
                              <div className='hoverLine' />
                            </div>

                            <div
                              className='button is-medium is-primary room-link'
                            >
                              Details
                            </div>


                            <Img
                              fluid={post.frontmatter.image.childImageSharp.fluid}
                              alt={post.frontmatter.title}
                              style={{ width: 'auto' }}
                              className='image'
                            />


                            {/*
                            <PreviewCompatibleImageFluid imageInfo={{
                              image: post.frontmatter.image,
                              alt: post.frontmatter.title + ' ' + 'Bild'
                            }}
                            />
                            */}
                          </div>
                        </div>
                      </Link>
                    </Optik>
                  </Fade>
                </div>
              )))}
          </div>
        </div>
      </section>

    )
  }
}

Optiken.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query OptikenQuery {
      allMarkdownRemark(

        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "optiken-post" } }}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              image {
                childImageSharp {
                  fluid(maxWidth: 200, maxHeight: 170, quality: 92, srcSetBreakpoints: [350, 700, 1050, 1400]) {
                    ...GatsbyImageSharpFluid_withWebp
                    presentationWidth
                  }
                }
              }
              title
              date(formatString: "DD.MM.YYYY")
              featured
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <Optiken data={data} count={count} />
    )}
  />
)
