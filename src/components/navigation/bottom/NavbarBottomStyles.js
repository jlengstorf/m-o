import styled from 'styled-components'

const NavbarBase = styled.nav`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1030;

  #bottom-nav-icon-bg{
    /* background: -moz-linear-gradient(120deg, rgba(252,0,57,1) 0%, rgba(116,0,0,1) 100%);
    background: -webkit-linear-gradient(120deg, rgba(213,0,0,1 ) 0%,rgba(255,0,0,1) 100%);
    background: linear-gradient(120deg, rgba(255,0,0,1) 0%,rgba(255,0,0,1) 100%); */
  }
`

export const NavbarBottom = styled(NavbarBase)`
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.65);
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => (props.show ? 'none' : 'translate(0, 100%)')};
`
