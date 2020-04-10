import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout index={true}>
    <SEO title="Home" />
    <div style={{ maxWidth: `750px` }}>
      <h2>About me</h2>
      <p>
        Hey there! My names Stefano, but you can call me Stef for short. I am
        currently a third year student at the University of Pennsylvania studying
        computer science. This website is me testing my abilities and also a way
        of putting myself out there. I'll be playing with different technologies
        on this website as well as making a post here or there. There may be a 
        blog coming soon, or it might just be on this website. I'm very much interested
        in making a social impact for the better of society, so hopefully I'll make
        posts related to that. I also like joking around too, so I might make joke posts too,
        who knows. For reference, I'm building this website using gastby.js.
      </p>
      <h3>Education</h3>
      <p>
        I attend the University of Pennsylvania currently as a third year student
        for a Bachelor's in Computer and Information Sciences. I'm also pursuing a 
        minor in Theater Arts as well. I've taken coursing ranging from Algorithms,
        Operating Systems, Computer Architecture, Encryption and Networks to 
        Intro to Directing, Intro to Acting, and Theatre as Journalism.
      </p>
      <h3>Experience</h3>
      <p>
        I've worked at a startup called Teamtrics as the only native Android Developer
        and I've done machine learning research for the National University of Singapore
        as an application to localizing a bluetooth low energy sensor node in a 
        wireless sensor network. I'm also a teaching assistant for the Intro to
        Computing Systems course at Penn in the fall, and a project manager for 
        the Software Engineering course in the spring.
      </p>
    </div>
  </Layout>
)

export default IndexPage
