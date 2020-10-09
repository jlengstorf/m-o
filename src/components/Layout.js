import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Navbar from '../components/Navbar'
// import NavbarTop from '../components/navigation/top/NavbarTop'
import ScrollTop from 'react-headroom'
import scrollTopIcon from '../img/scrollTop.svg'
import NavbarBottom from '../components/navigation/bottom/NavbarBottom'
import { Footer } from '../components/Footer'
import DynamicBrowserTabTitle from './DynamicBrowserTabTitle'
import CookieConsent from 'react-cookie-consent'
import './all.sass'
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const TemplateWrapper = ({ footerData = null, children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <DynamicBrowserTabTitle />
        <Helmet>
          <html lang='de' />
          <title>{data.site.siteMetadata.title}</title>

          <meta
            name='description'
            content={data.site.siteMetadata.description}
          />

          <meta
            name='viewport' content='width=device-width, viewport-fit=cover'
          />

          <meta name='apple-mobile-web-app-capable' content='yes' />

          <link href='/img/apple_splash_640.png' sizes='640x1136' rel='apple-touch-startup-image' media='(device-width:  320px) and (device-height:  568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />
          <link href='/img/apple_splash_750.png' sizes='750x1334' rel='apple-touch-startup-image' media='(device-width:  375px) and (device-height:  667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />
          <link href='/img/apple_splash_828.png' sizes='828x1792' rel='apple-touch-startup-image' media='(device-width:  414px) and (device-height:  896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />
          <link href='/img/apple_splash_1125.png' sizes='1125x2436' rel='apple-touch-startup-image' media='(device-width:  375px) and (device-height:  812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' />
          <link href='/img/apple_splash_1242.png' sizes='1242x2208' rel='apple-touch-startup-image' media='(device-width:  414px) and (device-height:  736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' />
          <link href='/img/apple_splash_1242x2688.png' sizes='1242x2688' rel='apple-touch-startup-image' media='(device-width:  414px) and (device-height:  896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' />
          <link href='/img/apple_splash_1536.png' sizes='1536x2048' rel='apple-touch-startup-image' media='(device-width:  768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />
          <link href='/img/apple_splash_1668.png' sizes='1668x2224' rel='apple-touch-startup-image' media='(device-width:  834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />
          <link href='/img/apple_splash_1668x2388.png' sizes='1668x2388' rel='apple-touch-startup-image' media='(device-width:  834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />
          <link href='/img/apple_splash_2048.png' sizes='2048x2732' rel='apple-touch-startup-image' media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />

          <link rel='apple-touch-startup-image' href='/img/apple_splash_640_landscape.png' media='(device-width:  320px) and (device-height:  568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' />
          <link rel='apple-touch-startup-image' href='/img/apple_splash_750_landscape.png' media='(device-width:  375px) and (device-height:  667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' />
          <link rel='apple-touch-startup-image' href='/img/apple_splash_828_landscape.png' media='(device-width:  414px) and (device-height:  896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' />
          <link rel='apple-touch-startup-image' href='/img/apple_splash_1125_landscape.png' media='(device-width:  375px) and (device-height:  812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)' />
          <link rel='apple-touch-startup-image' href='/img/apple_splash_1242_landscape.png' media='(device-width:  414px) and (device-height:  736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)' />
          <link rel='apple-touch-startup-image' href='/img/apple_splash_1242x2688_landscape.png' media='(device-width:  414px) and (device-height:  896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)' />
          <link rel='apple-touch-startup-image' href='/img/apple_splash_1536_landscape.png' media='(device-width:  768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' />
          <link rel='apple-touch-startup-image' href='/img/apple_splash_1668_landscape.png' media='(device-width:  834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' />
          <link rel='apple-touch-startup-image' href='/img/apple_splash_1668x2388_landscape.png' media='(device-width:  834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' />
          <link rel='apple-touch-startup-image' href='/img/apple_splash_2048_landscape.png' media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' />

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/img/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            href='/img/favicon-32x32.png'
            sizes='32x32'
          />
          <link
            rel='icon'
            type='image/png'
            href='/img/favicon-16x16.png'
            sizes='16x16'
          />

          <link
            rel='mask-icon'
            href='/img/safari-pinned-tab.svg'
          />

          {/*
          <meta name='theme-color' content='#fff' />
          */}
          <meta property='og:type' content='business.business' />
          <meta property='og:title' content={data.site.siteMetadata.title} />
          <meta property='og:url' content='/' />
          {/*<meta property='og:image' content='/img/og-image.jpg' />
          */}


        </Helmet>


        <CookieConsent
          enableDeclineButton
          location='top'
          buttonText='OK'
          declineButtonText='Ablehnen'
          cookieName='military-optics-ga'
          style={{ background: '#2B373B', zIndex: '4000' }}
          buttonStyle={{ color: 'white', backgroundColor: '#347738', borderRadius: 'none', fontSize: '13px' }}
          declineButtonStyle={{ color: 'white', backgroundColor: '#347738', borderRadius: 'none', fontSize: '13px' }}
          expires={150}
        >
          <span role='img' aria-label='Cookie'>🍪{' '}</span>
          Diese Seite verwendet Cookies. Für eine uneingeschränkte Nutzung der Webseite werden Cookies benötigt. Sie stimmen der Verwendung von Cookies durch Anklicken von 'OK' zu. Nähere Informationen finden Sie in unseren
          <span role='img' aria-label='Cookie'>{' '}🍪🍪🍪{' '}</span>
          <Link to='/datenschutz' className='has-text-primary'>Datenschutzbestimmungen</Link>
        </CookieConsent>
        <Navbar />
        <div id='top' />
        <div>{children}</div>
        <Footer data={footerData} />
        <ScrollTop pinStart={1000} style={{ top: 'calc(90vh - 0px)', left: 'auto' }}>
          <a href='#top'><img src={scrollTopIcon} alt='Back to top' style={{ width: '3rem', height: '3rem', marginRight: '1rem', float: 'right', marginBottom: '1rem' }} /></a>
        </ScrollTop>

        <NavbarBottom />

      </>
    )}
  />
)

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
      edges {
        node {
          id
          frontmatter {
            mainpitch {
              logo {
                childImageSharp {
                  fixed(width: 150, quality: 92) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
              title
              subtitle
            }
          }
        }
      }
    }
  }
`

export default TemplateWrapper
