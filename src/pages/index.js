import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>About me</h2>
    <p>This page will briefly describe who I am and what they can find on this website.</p>
    <h3>Education</h3>
    <p>Education U of P blah</p>
    <h3>Experience</h3>
    <p>Experience place holder</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, float: `right` }}>
      <Image />
      (replace this with a picture of me)
    </div>
  </Layout>
)

export default IndexPage
