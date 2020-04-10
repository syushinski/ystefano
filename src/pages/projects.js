import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div style={{maxWidth: 600, width: 600}}>
      <h1>Projects</h1>
      <p>Here's where I'll list my projects.</p>
    </div>
  </Layout>
)

export default ProjectsPage
