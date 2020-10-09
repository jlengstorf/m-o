import React, { useState, useMemo } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../../../img/logo.png'
import { NavbarBottom } from './NavbarBottomStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../utils/fontawesome'

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    false,
    false,
    300
  )

  return useMemo(
    () => (
      <>
        <NavbarBottom show={hideOnScroll}>
          <NavbarBottomContent
            role='navigation'
            aria-label='bottom-navigation' style={{ boxShadow: '0 0 4px black' }}
          >
            <Link
              to='/optiken'
              style={{ display: 'inline-block', width: '20%' }} className='navbar-item is-expanded has-text-centered'
              activeClassName="active"
            >
              <FontAwesomeIcon icon='binoculars' width="14" className='navIcon' />
              <p className='is-size-7'>Optiken</p>
            </Link>

            <Link
              to='/about'
              style={{ display: 'inline-block', width: '20%' }} className='navbar-item is-expanded has-text-centered has-text-inverted'
              activeClassName="active"
            >
              <FontAwesomeIcon icon='user' width="14" className='navIcon' />
              <p className='is-size-7'>About</p>
            </Link>

            <Link
              to='/'
              id='bottom-nav-icon-bg'
              style={{ display: 'inline-block', width: '20%', height: '100%' }}
              className='is-expanded has-text-centered'
            >
              <img src={logo} alt='Logo' style={{ width: '3rem', maxHeight: '2.5rem' }} />
            </Link>

            <Link
              to='/#faq'
              activeClassName="active"
              className='navbar-item is-expanded has-text-centered'
              style={{ display: 'inline-block', width: '20%' }}
            >
              <FontAwesomeIcon icon='question-circle' width="14" className='navIcon' />
              <p className='is-size-7'>FAQ</p>
            </Link>

            <Link
              to='/kontakt'
              activeClassName="active"
              className='navbar-item is-expanded has-text-centered'
              style={{ display: 'inline-block', width: '20%' }}
            >
              <FontAwesomeIcon icon='envelope' width="14" className='navIcon' />
              <p className='is-size-7'>Kontakt</p>
            </Link>
          </NavbarBottomContent>
        </NavbarBottom>
      </>
    ),
    [hideOnScroll]
  )
}

const NavbarBottomContent = styled.div`
  background: -moz-radial-gradient(circle, rgba(0,400,0,0.4) 0%,rgba(0,0,0,1) 100%);
  background: -webkit-radial-gradient(circle, rgba(0,400,0,0.4) 0%,rgba(0,0,0,1) 100%);
  background: radial-gradient(circle, rgba(0,400,0,0.4) 0%,rgba(0,0,0,1) 100%);
`
