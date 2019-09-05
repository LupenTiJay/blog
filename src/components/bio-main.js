import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import styles from '../styles/bio-main.module.css'
import profilePic from '../assets/profile.png'
import { rhythm } from '../utils/typography'
import Link from "gatsby-link";

class Bio extends React.Component {
  render() {
    return (
      <div
        className={styles.container}
      >
        {/* <div
          className={styles.imgContainer}  
        > 
          <img
            src={profilePic}
            alt={`Jayant Tiwari`}
            className={styles.img}
          />
        </div> */}
        <div
          className={styles.bioContainer}
        >
          <p className={styles.body}>
            SDE at Alexa@Amazon

          </p>
          <Link to={`/about/`} className={styles.body}>
                 About →
            </Link>
        </div>
      </div>
    )
  }
}

export default Bio