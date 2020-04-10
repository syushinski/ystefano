import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
    <Layout>
        <SEO title="Blog" />
            <div style={{maxWidth: 600, width: 600}}>
                <h1>Blog</h1>
                <p>Here's where I'll list my blog.</p>
            </div>
    </Layout>
)

export default BlogPage