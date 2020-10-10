import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
// import Img from 'gatsby-image'
import Optiken from '../components/Optiken';
import BlogRoll from '../components/BlogRoll';
import Faq from '../components/Faq';
// import CustomLink from '../components/CustomLink'
// import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome';
import Fade from 'react-reveal/Fade';
// import logo from '../img/logo.png'
import PulseText from 'react-pulse-text';
// import PreviewCompatibleImageFluidBg from '../components/PreviewCompatibleImageFluidBg'
// import PreviewCompatibleImageFluid from '../components/PreviewCompatibleImageFluid'
import Bg from '../components/Bg';
import BookImage from '../components/BookImage';

export const HomePageTemplate = ({ home }) => {
  return (
    <>
      {/*
      <div
        className='full-width-image margin-top-0'
        style={{
          backgroundImage: `url(${
            !!home.image.childImageSharp
              ? home.image.childImageSharp.fluid.src
              : home.image
            })`,
          backgroundPosition: 'center',
        }}
      />
      */}
      <div
        className="imageContainer"
        style={{ position: 'relative', height: '100vh' }}
      >
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

        <PreviewCompatibleImageFluidBg imageInfo={{
          image: home.image,
          alt: 'Bild'
        }}
        />
        */}
      </div>

      <section
        className="hero is-medium"
        style={{
          position: 'absolute',
          top: '12%',
          marginLeft: 'auto',
          right: '0',
          width: '100%',
        }}
      >
        <div
          className="hero-body"
          style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
        >
          <Fade>
            <div className="container">
              <h1 className="title is-1 is-size-1-widescreen is-size-1-fullhd is-uppercase has-text-centered text-shadow is-spaced">
                {home.mainpitch.title}
              </h1>

              <PulseText
                text={home.mainpitch.subtitle}
                duration={6000}
                iterationCount={1}
              >
                <h2 className="subtitle is-5 is-uppercase has-text-centered text-shadow has-text-white-ter">
                  {home.mainpitch.subtitle}
                </h2>
              </PulseText>

              <div
                className="column has-text-centered"
                style={{ paddingTop: '4rem' }}
              >
                <Link
                  className="button is-medium is-outlined is-primary is-inverted"
                  to="/#optiken"
                >
                  mehr erfahren test
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <div
        className="column is-12 has-text-centered"
        id="optiken"
        style={{
          position: 'relative',
          background: 'rgba(0,0,0,0.9)',
          paddingTop: '3rem',
        }}
      >
        <h1 className="title is-2 is-uppercase">Optiken</h1>
        <div className="headline" />
      </div>
      <Optiken />
      <div
        className="column is-12 has-text-centered"
        style={{ background: 'rgba(0,0,0,0.9)', position: 'relative' }}
      >
        <Link className="button is-medium is-primary" to="/optiken">
          alle Optiken erkunden
        </Link>
      </div>
      <section id="info">
        <div className="hero is-medium has-text-centered">
          <div className="hero-body" style={{ position: 'relative' }}>
            <div className="columns is-centered">
              <div
                className="column is-8"
                style={{ background: 'rgba(0,0,0,0.9)' }}
              >
                <h1
                  className="title is-3 is-spaced text-shadow has-text-primary"
                  style={{ position: 'relative' }}
                >
                  Hier gibts die neueste Auflage von Military-Optics in
                  gebundener, hochqualitativer Buchform
                </h1>
                <h2
                  className="subtitle text-shadow has-text-white-ter"
                  style={{ position: 'relative' }}
                >
                  Schreiben Sie mir einfach und ich melde mich umgehend.
                </h2>

                <BookImage />
                {/*
                <Img
                  fluid={home.bookImage.childImageSharp.fluid}
                />

                <PreviewCompatibleImageFluid imageInfo={{
                  image: home.bookImage,
                  alt: 'Bild'
                }}
                />
                */}
              </div>
            </div>
            <div className="column is-12">
              <Link to="/kontakt" className="button is-medium is-primary">
                Anfrage senden
              </Link>
            </div>
          </div>
        </div>
      </section>
      <BlogRoll />
      <div
        className="column is-12 has-text-centered"
        style={{ background: 'rgba(0,0,0,0.9)', position: 'relative' }}
      >
        <Link className="button is-medium is-primary" to="/blog">
          alle Einträge
        </Link>
      </div>
      <Faq />
    </>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { footerData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;

    return (
      <Layout footerData={footerData}>
        <HomePageTemplate home={home} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
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
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
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
`;
