import React from "react";
import glamorous from "glamorous";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import styles from "../styles/layout-index.module.css"
import logo from '../assets/logo.png'
export default ({ children, data }) => 
<div>
  <div className={styles.header}>
    <div>
      <Link to={`/`}>
        <img
          src={logo}
          alt={`Jayant Tiwari`}
          className={styles.logo}
        />
      </Link>
    </div>
    <div>
      <Link to={`/about/`}>
        About
      </Link>
    </div>
  </div>
  <div className={styles.page}>
    <div>
      {children()}
    </div>
  </div>
</div>
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`