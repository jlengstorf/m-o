import React from 'react'
import fbIcon from '../img/social/logo-facebook-share.svg'

const Share = props => {
  // const twitter = `https://twitter.com/intent/tweet?url=${props.url + props.pathname}&text=${props.title}`;

  const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url}`;

  return (
    <React.Fragment>
      <div className='columns'>
        <div className='column is-12'>

          <div className="" style={{ float: 'right' }}>
            <h4 style={{ display: 'inline-block', color: '#fff' }}>Beitrag teilen&nbsp;</h4>
            <div style={{ listStyle: 'none', display: 'inline-block' }}>
              <a href={fb} target="blank">
                <img src={fbIcon} alt="facebook" style={{ width: '2rem', marginRight: '0.5rem' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Share
