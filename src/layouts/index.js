import React from "react";
import glamorous from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
const { Div, H3 } = glamorous
const linkStyle = css({ float: `right` });
export default ({ children, data }) => 
  <Div
    margin={`0 auto`}
    maxWidth={1000}
    padding={0}
    paddingTop={rhythm(1)}
  >
    <Link to={`/`}>
      <H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        {data.site.siteMetadata.title}
      </H3>
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    {children()}
  </Div>
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`