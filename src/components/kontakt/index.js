import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Closer from '../../components/Closer'
import Avatar from '../../components/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextAnimation from 'react-animate-text'
import '../../utils/fontawesome'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      message: '',
      email: '',
      isValidated: false,
      showNameField: false,
      showGreeting: false,
      showTextArea: true,
      showEmailInfo: false,
      showEmailField: true,
      showSendButton: false,
    }
  }

  componentDidMount() {
    this.NameField = setTimeout(
            () => this.setState({
              showNameField: true,
            }),
            4000,
        );
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

  render() {
    return (

      <div className="container" style={{ marginTop: '1rem', paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="columns is-multiline is-centered is-vcentered">
            <div className='column is-3' />
            <Panel className='column is-6 is-one-third-widescreen'>
              <Closer />
            <div className='column is-12 has-text-centered'>
            <Avatar />
            </div>
            <form
              name="kontakt"
              method="post"
              action="/kontakt/danke/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="kontakt" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="field">
                <label className="label" htmlFor={'name'}>
                  <TextAnimation charInterval='80'><span style={{ color: 'white' }}>Hallo, ich bin Jürgen. Wie ist ihr Name?</span></TextAnimation>
                </label>

                <Fade collapse when={this.state.showNameField}>
                  <div className="control">
                    <input
                      className="input is-primary"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                </Fade>
              </div>

              <div className="field">
                <Fade collapse when={this.state.name.length >= 3}>
                    <label className="label" htmlFor={'message'} style={{ marginBottom: '10px' }}>

                      <span style={{ color: 'white' }}>Hallo {this.state.name}! Wie kann ich Ihnen helfen?
                      </span>

                    </label>
                  <div className="control">
                    <textarea
                      className="textarea has-fixed-size is-primary"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                </Fade>

              </div>
              <div className="field">
                <Fade collapse when={this.state.message.length >= 4}>
                  <label className="label" htmlFor={'email'} style={{ marginBottom: '10px' }}>
                    <span style={{ color: 'white' }}>Um die Anfrage engegen zu nehmen benötige ich noch Ihre Email Adresse.
                    </span>

                  </label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                </Fade>

              </div>
              <Fade when={this.state.email.length >= 5}>
                <div className="field">
                  <button className="button is-medium is-outlined is-primary is-inverted" type="submit" style={{ marginTop: '15px' }}>
                    Absenden&nbsp;<FontAwesomeIcon icon='paper-plane' />
                  </button>
                </div>
              </Fade>
            </form>
          </Panel>
          <div className='column is-3' />
        </div>
      </div>
    )
  }
}


const Panel = styled.div`
  border-radius: 3px;
  background: -moz-linear-gradient(120deg, rgba(0,0,0,1) 0%, rgba(0,400,0,0.5) 100%);
  background: -webkit-linear-gradient(120deg, rgba(0,0,0,1 ) 0%,rgba(0,400,0,0.5) 100%);
  background: linear-gradient(120deg, rgba(0,0,0,1) 0%,rgba(0,400,0,0.5) 100%);
  // background: radial-gradient(circle, rgba(0,0,0,0.4) 0%,rgba(0,0,0,1) 100%);
  box-shadow: 0 0 15px rgba(0,0,0,.6);
  padding: 32px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;
`
