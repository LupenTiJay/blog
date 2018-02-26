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
        <div>
          <p className={styles.body}>
            My name is <strong>Jayant Tiwari </strong> 
            This blog is written and maintained by me
            I'm entering my fourth year in Computer Engineering at University Of Waterloo 
          </p>
        </div>
      </div>
    )
  }
}

export default Bio