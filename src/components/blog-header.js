import React from "react";
import glamorous from "glamorous";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import styles from "../styles/blog-header.module.css"
import logo from "../assets/logo1.png";
const BlogHeader = () => {
    return (
        <div className={styles.header}>
                <img
                src={logo}
                alt={`Jayant Tiwari`}
                className={styles.logo}
                />
            <div>
            <Link to={`/about/`}>
                About
            </Link>
            </div>
        </div>
    )
}
module.exports = BlogHeader;