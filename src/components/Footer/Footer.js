import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PreviewCompatibleImageFixed from '../PreviewCompatibleImageFixed'

export const FooterTemplate = ({ data }) => {
  const { mainpitch } = data

  return (
    <div style={{ position: 'relative' }}>
      <footer className='footer' style={{ background: 'rgba(0,0,0,0.9)' }}>
        <div className='content has-text-centered'>
          {/*
          <Img fixed={mainpitch.logo.childImageSharp.fixed} alt='Logo' style={{ width: '150px' }} />
          */}
          <PreviewCompatibleImageFixed imageInfo={{
            image: mainpitch.logo,
            alt: 'Bild'
          }}
          />
        </div>
        <div>
          <h1 className='title has-text-centered is-uppercase' style={{ letterSpacing: '3px' }}>{mainpitch.title}</h1>
          <h2 className='subtitle has-text-centered is-uppercase has-text-primary'>{mainpitch.subtitle}</h2>
        </div>

        <Links className='column is-12 has-text-centered' style={{ opacity: '0.7' }}>
          <Link to='/impressum' className='footer-link has-text-white-ter'>Impressum</Link>{' | '}
          <Link to='/datenschutz' className='footer-link has-text-white-ter'>Datenschutz</Link>
        </Links>

        <Links className='column is-12 has-text-centered'>

            <p style={{ color: 'white', opacity: '0.6' }}>© MILITARY-OPTICS by <a href='https://www.digital-comfort-zone.com' className='footer-link has-text-white-ter'>digital-comfort-zone</a></p>

        </Links>
      </footer>
    </div>
  )
}

const Footer = props => {
  if (!props.data) {
    return null
  }
  const data = props.data.edges[0].node.frontmatter
  return <FooterTemplate data={data} />
}

export { Footer }

const Links = styled.div`

  .footer-link{
    &:hover{
      opacity: 0.5 !important;
    }
  }
`
