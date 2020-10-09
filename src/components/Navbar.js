import React from 'react'
import { Link } from 'gatsby'
// import Logo from '../NavbarLogo'
// import LogoColor from './NavbarLogoColor'
import QuickBooking from '../components/QuickBooking'
import Headroom from 'react-headroom'
import logo from '../img/logo-white.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import '../utils/fontawesome'

const Navbar = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      background: 'transparent',
    }
  }

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({background: 'black'})
    } else {
      this.setState({background: 'transparent'})
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.listenScrollEvent)

    // Get all 'navbar-burger' elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the 'data-target' attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render () {
    return (
      <div className='navigation'>
        <Headroom>

            <QuickBooking />

          <nav
            className='navbar'
            role='navigation'
            aria-label='main-navigation'
            style={{background: this.state.background}}
          >
            <div className='navbar-brand'>
              <Link to='/' className='navbar-item' title='Logo'>
                <img src={logo} alt='Logo' style={{ width: '38px' }} />
                {this.state.background === 'black' ? <h1 className='title is-4 navbar-scroll-title' style={{ marginLeft: '.5rem' }}>MILITARY-OPTICS</h1> : null}
              </Link>
              {/* Hamburger menu */}
              <div className='navbar-burger burger' data-target='navMenu'>
                <span />
                <span />
                <span />
              </div>
            </div>
            <div id='navMenu' className='navbar-menu'>
              <div className='navbar-start has-text-centered'>
                <Link
                  className='navbar-item is-uppercase'
                  to='/about'
                  activeClassName="active"
                >
                  About
                </Link>
                <Link
                  className='navbar-item is-uppercase'
                  to='/optiken'
                  activeClassName="active"
                >
                  Optiken
                </Link>

                <Link
                  className='navbar-item is-uppercase'
                  to='/#news'
                  activeClassName="active"
                >
                  News
                </Link>
                <Link
                  className='navbar-item is-uppercase'
                  to='/kontakt'
                  activeClassName="active"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </nav>
        </Headroom>
      </div>
    )
  }
}

export default Navbar
