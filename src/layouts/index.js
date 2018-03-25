import React from "react";
import glamorous from "glamorous";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import styles from "../styles/layout-index.module.css"
import logo from '../assets/logo.png'
require("prismjs/themes/prism-twilight.css");
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css';
export default ({ children, data }) => 
<div>
  <div>
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