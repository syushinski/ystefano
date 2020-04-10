import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
    <Layout index={false}>
        <SEO title="Blog" />
            <h1>Projects</h1>
            <p>Here's where I'll list my projects.</p>
    </Layout>
)

export default BlogPage