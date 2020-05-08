import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
      <p className='notice' >This documentation is still in development and as such content will be missing.</p>
      <h5>General Infomation</h5>
      <ul>
          <li><Link to="/punishment-guidelines">Punishment Guidelines</Link></li>

      </ul>
      <h5>Rank Specific Infomation</h5>
      <ul>
          <li><Link to="/commands/player">Player Commands</Link></li>
          <li><Link to="/commands/trial-mod">Trial-Mod Commands</Link></li>
          <li><Link to="/commands/mod">Mod Commands</Link></li>
          <li><Link to="/commands/admin">Admin Commands</Link></li>
      </ul>
  </Layout>
)

export default IndexPage
