import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import './faq.css'
import Loadable from 'react-loadable'

const Fade = Loadable({
  loader: () => import('react-reveal/Fade'),
  loading: () => <div>Loading...</div>
})

const Faq = class extends React.Component {
  render () {
    return (
      <section id='faq'>
        <div className='hero'>
          <Fade>
            <div className='hero-body'>
              <div className='columns is-centered'>
                <div className='column is-8 has-text-centered' style={{ background: 'rgba(0,0,0,0.7)' }}>
                  <div style={{ position: 'relative' }}>
                    <h1 className='title text-shadow has-text-primary'>
                      FAQ
                    </h1>
                    <div className='headline' />
                  </div>
                  <h2 className='subtitle text-shadow has-text-white-ter' style={{ margin: '2.5rem' }}>
                    Häufig gestellte Fragen rund um meine Optiken
                    <span role='img' aria-label='Emojis'>{' '}🔭🏔{' '}</span>
                  </h2>
                </div>
              </div>

              <div className='columns is-multiline is-centered'>

                <div className='column is-8' style={{ padding: '0px' }}>
                  <Accordion allowZeroExpanded='true'>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                        Welche verschiedene Optiken gibt es?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Das Sammelgebiet ist umfangreich und eine Vielzahl an verschiedenen Optiken wurden im letzten Jahrhundert hauptsächlich für militärische Zwecke produziert. So zum Beispiel Waffenoptiken, Geschützoptiken, Optiken für gepanzerte Fahrzeuge, Beobachtungsoptiken und viele mehr.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Kann man ihre Optiken kaufen?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Nein. Ich verkaufe keine Optiken.
                          Meine Optiken sind auch für militärische Zwecke unbrauchbar. Sie dienen rein als Sammelobjekte.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Kann man Optiken für Museen ausborgen?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Nein, leider nicht
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Kann man die Optiken wo begutachten?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Ja, es gibt etliche Exemplare zur Ausstellung im Militärmuseum Rosenau/ Niederösterreich.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>

              </div>
            </div>
          </Fade>
        </div>
      </section>
    )
  }
}

export default Faq
