import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const EpicraftPluginPage = () => (
    <Layout>
        <SEO title="Epicraft Plugin Docs" />
        <h1>Epicraft</h1>
        <p>The Epicraft plugin adds some of the customisation to the epicraft server.</p>
        <p>For feature requests contact Newt.</p>
        <h4>Regions</h4>
        <hr />
        <p className='notice' >Region's are still in development.</p>
            <p>Regions allow for areas of the world to have properties the rest of the world doesn't such as teleporting, swapping a players inventory or setting their health.</p>
            <Link to="/plugins/epicraft/regions" className='link-button'>Regions Guide</Link>
            <hr/>
        <h4>Selections</h4>
        <p>To select an area with the Epicraft plugin you need to use a diamond axe. The axe can be toggled off using <code>/select toggle</code>.</p>
    </Layout>
)

export default EpicraftPluginPage
