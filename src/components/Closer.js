import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'

const Icon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  &:hover{
    cursor: pointer;
  }
`

class Closer extends React.Component {
  render () {
    return (
      <Icon>
        <Link to='/' className='has-text-white-ter'>
          <FontAwesomeIcon icon='times' style={{ fontSize: '2rem' }} />
        </Link>
      </Icon>
    )
  }
}

export default Closer
