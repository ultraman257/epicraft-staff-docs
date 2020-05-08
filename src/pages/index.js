import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
      <h5>General Infomation</h5>
      <ul>
          <li><Link to="/punishment-guidelines">Punishment Guidelines</Link></li>

      </ul>
      <h5>Rank Specific Infomation</h5>
      <ul>
          <li><Link to="/commands/trial-mod">Trial-Mod Commands</Link></li>
      </ul>
  </Layout>
)

export default IndexPage
