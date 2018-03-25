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
          justifyContent: 'space-evenly',
          padding: '1rem'
        }}
      >
        <img
          src={profilePic}
          alt={`Jayant Tiwari`}
        />
        <p>
          Written by <strong>Jayant Tiwari</strong> currently an undergrad student
        </p>
      </div>
    )
  }
}

export default Bio