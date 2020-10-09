import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import Img from 'gatsby-image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'
import Fade from 'react-reveal'
import PreviewCompatibleImageFluid from '../components/PreviewCompatibleImageFluid'
import PreviewCompatibleImageFluidBg from '../components/PreviewCompatibleImageFluidBg'
import Bg from '../components/Bg'

export const OptikenPostTemplate = ({
  content,
  contentComponent,
  image,
  category,
  description,
  title,
  vehicleData,
  helmet
}) => {
  const PostContent = contentComponent || Content
  const [showVehicleData, setShowVehicleData] = useState(false)
  // const [showEquipment, setShowEquipmet] = useState(false)

  const VehicleData = () => (
    <pre>{vehicleData}</pre>
  )

  // const Equipment = () => (
  //   <p>{equipment}</p>
  // )


  return (
    <section>
      {helmet || ''}
      <div className='imageContainer' style={{ position: 'relative', height: '100%' }}>

        <Bg />
        {/*
        <Img
          fluid={bg.childImageSharp.fluid}
          style={{
            width: '100%',
            height: '100vh',
            position: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <PreviewCompatibleImageFluidBg imageInfo={{
          image: bg,
          alt: title + ' ' + 'Bild'
        }}
        />
        */}
      </div>
      <div className='container section'>
        <div className='column is-2' />
        <div className='column is-6'>
          <h1 className='title is-size-2 is-size-4-mobile has-hyphens has-text-weight-bold is-bold-light is-uppercase has-text-primary has-text-centered' style={{ position: 'relative', background: 'rgba(0,0,0,0.9)', padding: '1rem' }}>
            {title}
          </h1>
        </div>
        <div className='column is-4' />
      </div>

      <div className='container'>
        <div className='column is-8 has-text-centered' style={{ margin: '0 auto', display: 'block' }}>

          <ImageContainer>
            {/*
            <Img fluid={image.childImageSharp.fluid} />
            */}
            <PreviewCompatibleImageFluid imageInfo={{
              image: image,
              alt: title + ' ' + 'Bild'
            }}
            />
          </ImageContainer>
        </div>
      </div>

      <div className='container'>
        <div className='column is-8' style={{ minWidth: '280px', margin: '0 auto', display: 'block' }}>
          <Panel>
            <h1 className='title is-3'>Überblick</h1>
            <PostContent content={content} />
            {/*
            <Expander onClick={this.showAboutLinks}>
            */}
            <div className='column is-12'>
              <Expander onClick={() => setShowVehicleData(!showVehicleData)}>
                <h4 className='subtitle is-6 has-text-primary' style={{ display: 'inline-block', margin: '0px' }}>
                  Technische Daten
                </h4>

                {showVehicleData ? <FontAwesomeIcon onClick={() => setShowVehicleData(!showVehicleData)} icon='minus' className='has-text-primary is-pulled-right' /> : <FontAwesomeIcon onClick={() => setShowVehicleData(!showVehicleData)} icon='plus' className='has-text-primary is-pulled-right' />}

                  {/*
                  {showMore ? <VehicleData /> : null }
                  */}
                <Fade collapse when={showVehicleData === true}>

                  <VehicleData className='content' />

                </Fade>

              </Expander>

              {/*
              <Expander onClick={() => setShowEquipmet(!showEquipment)}>
                <h4 className='subtitle is-6 has-text-primary' style={{ display: 'inline-block', margin: '0px' }}>
                  Ausstattung
                </h4>

                {showEquipment ? <FontAwesomeIcon onClick={() => setShowEquipmet(!showEquipment)} icon='minus' className='has-text-primary is-pulled-right' /> : <FontAwesomeIcon onClick={() => setShowEquipmet(!showEquipment)} icon='plus' className='has-text-primary is-pulled-right' />}

                <Fade collapse when={showEquipment === true}>
                  <Equipment />
                </Fade>
              </Expander>
              */}
            </div>
          </Panel>
        </div>
      </div>

      <div className='container'>
        <div className='column is-12 has-text-centered'>
          <Link className='button is-primary' to='/optiken'>zurück
          </Link>
        </div>
      </div>
    </section>
  )
}

OptikenPostTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  category: PropTypes.string,
  description: PropTypes.string,
  vehicleData: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const OptikenPost = ({ data }) => {
  const { markdownRemark: post, footerData } = data

  return (
    <Layout footerData={footerData}>
      <OptikenPostTemplate
        image={post.frontmatter.image}
        content={post.html}
        contentComponent={HTMLContent}
        category={post.frontmatter.category}
        description={post.frontmatter.description}
        vehicleData={post.frontmatter.vehicleData}
        helmet={
          <Helmet titleTemplate='%s | Optik'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

OptikenPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default OptikenPost

export const pageQuery = graphql`
  query OptikenPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 92) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
        description
        category
        vehicleData

      }
    }
    ...LayoutFragment
  }
`

const Panel = styled.div`
  border-radius: 3px;
  background: rgba(0,0,0,.9);
  box-shadow: 0 0 15px rgba(0,0,0,.6);
  padding: 32px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;
  color: white;
`

const ImageContainer = styled.div`
  margin: 0 auto;
  width: auto;
  max-width: 400px;
`

const Expander = styled.div`
  display: block;
  padding: 10px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  overflow: hidden;
  &:hover{
    cursor: pointer;
  }

`
