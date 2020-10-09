import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import '../../utils/fontawesome'
import locationIcon from '../img/location_icon.svg'
import PreviewCompatibleImageFluid from '../components/PreviewCompatibleImageFluid'

const categories = [
 { id: 1, category: "Alle" },
 { id: 2, category: "Dienstgläser" },
 { id: 3, category: "Entfernungsmesser" },
 { id: 4, category: "Panzer Optiken" },
 { id: 5, category: "Waffen Optiken" },
 { id: 6, category: "Geschütz Optiken" },
 { id: 7, category: "Beobachtungs Optiken" },
 { id: 8, category: "Neuheiten" },
 { id: 9, category: "Sonstiges" }
];


class Optiken extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // showSearch: false,
      // showCategory: false,
      category: 'Alle',
      showCategory: false,
      // showComplexity: false,
      showAll: true,
      // complexity: 'Schwierigkeit',
      showMap: false
    }
  }

  handleChange = (event) => {
    this.setState({
      category: event.target.value,
    }, this.showCategory());
    // console.log(this.state.category)
  }

  handleClick = () => {
    this.setState({
      showMap: !this.state.showMap,
    });
  }


  handleComplexity = (event) => {
    this.setState({
      complexity: event.target.value,
    }, this.showComplexity());
  }

  showCategory() {
      this.setState((state)=>{
        return{
          // showSearch: false,
        //category: state.category + 1,
        //showCategory: true,
        showCategory: true,
        showAll: false,
        // category: event.target.value
        // place: event.target.value
        }

      })
  }

  showComplexity() {
      this.setState((state)=>{
        return{
          // showSearch: false,
        //category: state.category + 1,
        //showCategory: true,
        showComplexity: true,
        showAll: false,
        // category: event.target.value
        // place: event.target.value
        }

      })
  }

  // fskFilter() {
  //   this.setState((state) => {
  //     return{
  //       fsk: false
  //     }
  //   })
  // }

  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className='' style={{ marginTop: '3rem' }}>
        <div className="" style={{ background: 'rgba(0,0,0,.9)' }}>
          <div className='column is-12 has-text-centered'>
            <div style={{ position: 'relative', marginTop: '3rem' }}>
              <h1 className='title is-2 has-text-primary is-uppercase'>Optiken</h1>
              <div className='headline' />
            </div>
          </div>
          <Filter>

            <div className='columns is-centered'>
              <div className='column is-12 has-text-centered'>
                <Icon src={locationIcon} style={{ width: '3.5rem' }} onClick={this.handleClick} />
                <p style={{ color: 'white', opacity: '0.5' }}>Kategorie wählen</p>

                <Fade bottom collapse when={this.state.showMap}>
                  <div className="select is-primary" style={{ margin: '1rem' }}>
                    <select
                      aria-label={'Kategorie'}
                      name={'Kategorie'}
                      onChange={this.handleChange}
                      id={'Kategorie'}
                      value={this.state.category}
                      style={{ minWidth: '200px' }}
                    >

                      {categories.map(item => <option key={item.id}>{item.category}</option>)}


                    </select>
                  </div>
                 </Fade>

              {/*
              <div class="select is-primary" style={{ margin: '1rem' }}>
                <select
                  name={'complexity'}
                  onChange={this.handleComplexity}
                  id={'complexity'}
                  value={this.state.complexity}
                  style={{ width: '200px' }}
                >
                  {complexityLevel.map(item => <option key={item.id}>{item.complexity}</option>)}

                </select>
              </div>


              <div style={{ margin: '1rem' }}>
                <p className='subtitle' >
                  FSK18
                </p>
                <button className='button is-medium is-rounded is-outlined is-inverted has-text-primary' id='alter' onClick={this.handleChange}>
                  {this.state.fsk ? (
                    `X`
                  ) : (
                    <FontAwesomeIcon icon='check' style={{ color: 'green' }} />
                  )}
                </button>


              </div>
              */}

            </div>

            </div>
          </Filter>

          <div className='container'>
            <div className='columns is-multiline is-centered'>
              {posts && (posts
                .filter(({ node: post }) => (this.state.category === 'Alle')).map(({ node: post }) => (
                  <div
                    className='is-parent column is-4'
                    key={post.id}
                  >
                    <Fade>
                      <Optik
                        style={{ padding: '5px', boxShadow: '0 0 10px rgba(0,0,0,.5)', maxWidth: '350px', margin: '0 auto' }}
                      >
                        <Link to={post.fields.slug}>
                          <div style={{ position: 'relative' }}>
                            <div className='img-container'>
                              <div
                                className='title is-size-4 has-text-centered has-text-primary is-uppercase'
                                style={{ position: 'absolute', width: '100%', background: 'rgba(0,0,0,.5)', padding: '15px', overflow: 'hidden' }}
                              >
                                {post.frontmatter.title}
                                <div className='hoverLine' />
                              </div>

                              <div
                                className='button is-medium is-primary optik-link'
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


          <div className='container'>
            <div className='columns is-multiline is-centered'>
              {/*
              {posts && (posts
                .filter(({ node: post }) => ( post.frontmatter.place ===  this.state.place && post.frontmatter.complexity == this.state.complexity)).map(({ node: post }) => (
              */}
              {posts && (posts
                .filter(({ node: post }) => ( post.frontmatter.category ===  this.state.category)).map(({ node: post }) => (

                  <div
                    className='is-parent column is-4'
                    key={post.id}
                  >
                    <Fade>
                      <Optik
                        style={{ padding: '0', boxShadow: '0 0 10px rgba(0,0,0,.5)', maxWidth: '350px', margin: '0 auto' }}
                      >
                        <Link to={post.fields.slug}>
                          <div style={{ position: 'relative' }}>
                            <div className='img-container'>
                              <div
                                className='title is-size-4 has-text-centered has-text-primary is-uppercase'
                                style={{ position: 'absolute', width: '100%', background: 'rgba(0,0,0,.9)', padding: '15px', overflow: 'hidden' }}
                              >
                                {post.frontmatter.title}
                                <div className='hoverLine' />
                              </div>

                              <div
                                className='button is-medium is-primary optik-link'
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
          <div className='columns'>
            <div className='column is-12 has-text-centered'>
              <Link className='button is-medium is-primary' to='/#featured-rooms' style={{ margin: '3rem' }}>zurück
              </Link>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

Optiken.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}


export default () => (
  <StaticQuery
    query={graphql`
    query OptikenQueryFull {
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
              category
              vehicleData
            }
          }
        }
      }
      ...LayoutFragment
    }
    `}
    render={(data, count) => (
      <Optiken data={data} count={count} />
    )}
  />
)

const Optik = styled.article`
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

  .optik-link {
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

  .img-container .optik-link:hover {
    transform: translate(-50%, -50%) scale(1);
  }

  .img-container:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  .img-container:hover .image {
    opacity: 0.3;
  }

  .img-container:hover .optik-link {
    transform: translate(-50%, -50%) scale(1);
  }
`

const Filter = styled.div`
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  padding: 10px;
  @media (min-width: 776px) {
    margin-bottom: 1rem;
  }
  margin-bottom: 0.5rem;
`

const Icon = styled.img`
  &:hover{
    cursor: pointer
  }
`
