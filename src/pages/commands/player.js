import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const PunishmentPage = () => (
    <Layout>
        <SEO title="Punishment Guidelines" />
        <h1>Commands - Player</h1>
        <p>Below is a list of commands accessible by all players.</p>
        <ul>
            <li><code>/back</code></li>
            <li><code>/balance</code></li>
            <li><code>/balancetop</code></li>
            <li><code>/delhome</code></li>
            <li><code>/home</code></li>
            <li><code>/sethome</code></li>
            <li><code>/kit</code></li>
            <li><code>/list</code></li>
            <li><code>/mail</code></li>
            <li><code>/message</code></li>
            <li><code>/motd</code></li>
            <li><code>/pay</code></li>
            <li><code>/ptime</code></li>
            <li><code>/pweather</code></li>
            <li><code>/realname</code></li>
            <li><code>/seen</code></li>
            <li><code>/spawn</code></li>
            <li><code>/suicide</code></li>
            <li><code>/tpaccept</code></li>
            <li><code>/tpahere</code></li>
            <li><code>/tpdeny</code></li>
            <li><code>/tpa</code></li>
            <li><code>/warp</code> - including /warp list</li>
            <li><code>/worth</code></li>
            <li><code>/claims</code></li>
            <li><code>/createclaims</code></li>
        </ul>
    </Layout>
)

export default PunishmentPage
