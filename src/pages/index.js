import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
      <p className='notice' >This documentation is still in development with some content yet to be written.</p>
      <h4>Staff Information</h4>
      <ul>
          <li><Link to="/punishment-guidelines">Punishment Guidelines</Link></li>
      </ul>
      <h4>Rank Specific Infomation</h4>
      <ul>
          <li><Link to="/commands/player">Player Commands</Link></li>
          <li><Link to="/commands/trial-mod">Trial-Mod Commands</Link></li>
          <li><Link to="/commands/mod">Mod Commands</Link></li>
          <li><Link to="/commands/admin">Admin Commands</Link></li>
      </ul>
      <h4>Plugins</h4>
      <ul>
          <li><Link to="/plugins/epicraft">Epicraft</Link></li>
      </ul>
  </Layout>
)

export default IndexPage
