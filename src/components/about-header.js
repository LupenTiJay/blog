import React from "react";
import glamorous from "glamorous";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import styles from "../styles/blog-header.module.css"
import logo from "../assets/logo2.png";
const BlogHeader = () => {
    return (
        <div className={styles.articleHeader}>
            <div>
            <Link to={`/`}>
                Go back
            </Link>
            </div>
            <div className={styles.blogHeaderLogoContainer}>
                <img
                    src={logo}
                    alt={`Jayant Tiwari`}
                    className={styles.logo}
                    /> 
            </div>
            <div>
            <Link to={`/about/`}>
                About
            </Link>
            </div>
        </div>
    )
}
module.exports = BlogHeader;