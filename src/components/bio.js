import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../assets/profile.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0rem',
          marginTop: ' 6rem'
        }}
      >
        <img
          src={profilePic}
          style={{borderRadius:'50%'}}
          alt={`Jayant Tiwari`}
        />
        <p style={{
          textAlign:'left',
          lineHeight: '6'
        }}>
          Written by <strong>Jayant Tiwari</strong> currently an SE at Alexa@Amazon
        </p>
      </div>
    )
  }
}

export default Bio