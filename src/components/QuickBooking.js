import React from 'react'
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Panel = styled.div`
  padding: 32px;
  margin-top: 1rem;
  margin-bottom: 2rem;
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class QuickBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render () {
    return (
      <>
        <button
          className='button is-primary'
          type='button'
          onClick={this.handleClick}
          style={{ position: 'absolute', top: '10px', right: '25px', zIndex: '2001', marginRight: '30px' }}
        >
          { this.state.show ? `X` : `Buch bestellen` }
        </button>
        <Fade collapse when={this.state.show} style={{ zIndex: '2000' }}>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.9)', position: 'absolute', right: '0', top: '0', zIndex: '2000', width: '100%' }}>

            <div className="container" style={{ marginTop: '1rem', padding: '2rem' }}>
              <div className="columns is-multiline is-centered is-vcentered">
                  <div className='column is-3' />
                  <Panel className='column is-6 is-one-third-widescreen'>
                  <h1 className='title is-2 has-text-primary'>
                    Kontakt
                  </h1>
                  <form
                    name="kontakt-buch"
                    method="post"
                    action="/kontakt/danke/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="kontakt-buch" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Name
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        Email
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Nachricht
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button className="button is-medium is-outlined is-primary" type="submit">
                        Absenden&nbsp;<FontAwesomeIcon icon='paper-plane' />
                      </button>
                    </div>
                  </form>
                </Panel>
                <div className='column is-3' />
              </div>
            </div>
            {/*
            <div className='has-text-centered' style={{ marginBottom: '2rem' }}>
              <h4 className='subtitle is-6' style={{ color: 'white' }}>Für Buchungen am selben Tag:
              </h4>
                <a href='tel:+436643936713' className='navIcon'>
                  <FontAwesomeIcon className='has-text-primary' icon='phone' style={{ fontSize: '2rem' }} />
                </a>
              <h4 className='subtitle is-6' style={{ color: 'white', marginTop: '1.0rem' }}>
                +43 / 664 3936713
              </h4>
            </div>
            */}
          </div>
        </Fade>
      </>
    );
  }
}

export default QuickBooking
