/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import NavBar from "./nav"
import "./layout.css"
import Image from "./image"

const Layout = ({ children, index }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  let photoOfMe;

  if (index) {
    photoOfMe = <div style={{float: `left`}}>
    <div style={{
          maxWidth: `300px`,  
          width: `100%`, 
          visibility: index,
          position: `fixed`}}>
      <Image/>
    </div>
    </div>;
  } else {
    photoOfMe = null;
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <NavBar/>
      
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 800,
          width: `70%`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          float: `left`
        }}
      >
        <main>{children}</main>
      </div>
      
      {photoOfMe}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
