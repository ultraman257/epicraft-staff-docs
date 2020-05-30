import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const EpicraftPluginPage = () => (
    <Layout>
        <SEO title="Epicraft Region Docs" />
        <Link to="/plugins/epicraft">Back to index</Link>
        <h1>Epicraft - Regions</h1>
        <h4>Basic Usage</h4>
        <hr />
        <p className='notice' >Region's are still in development.</p>
        <ol>
            <li>Define a region selection using the <Link to="/plugins/epicraft">selection tool</Link>.</li>
            <li>Run <code>/region new [name]</code></li>
            <li>Done, it's that simple even Budd can do it.</li>
        </ol>
        <h4>All Commands</h4>
        <hr />
        <ul>
            <li><code>/region list</code></li>
            <li><code>/region nearby</code></li>
            <li><code>/region info</code></li>
            <li><code>/region inside</code></li>
        </ul>

    </Layout>
)

export default EpicraftPluginPage
