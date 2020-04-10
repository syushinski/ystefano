import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PhotosPage = () => (
  <Layout>
    <SEO title="Photos" />
    <div style={{maxWidth: 600, width: 600}}>
      <h1>Photos</h1>
      <p>Here's where I'll list my photos.</p>
    </div>
  </Layout>
)

export default PhotosPage