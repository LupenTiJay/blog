import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import styles from '../styles/bio-main.module.css'
import profilePic from '../assets/profile.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <div className={styles.imgCrop}>
          <img
            src={profilePic}
            alt={`Jayant Tiwari`}
            className={styles.img}
          />
        </div>
        <p>
          Written by <strong>Jayant Tiwari</strong> currently an undergrad student
        </p>
      </div>
    )
  }
}

export default Bio