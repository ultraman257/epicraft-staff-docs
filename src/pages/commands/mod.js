import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const PunishmentPage = () => (
    <Layout>
        <SEO title="Punishment Guidelines" />
        <h1>Commands - Trial-Mod</h1>
        <p>Below is a list of commands for trial-mods.</p>
        <ul>
            <li><code>/ban</code></li>
            <li><code>/tempban</code></li>
            <li><code>/broadcast</code></li>
            <li><code>/enderchest</code></li>
            <li><code>/gamemode (survival/spectator)</code></li>
            <li><code>/invsee (player name)</code></li>
            <li><code>/jump</code></li>
            <li><code>/jail</code></li>
            <li><code>/lightning</code></li>
            <li><code>/mute</code></li>
            <li><code>/top</code></li>
            <li><code>/weather</code></li>
        </ul>
    </Layout>
)

export default PunishmentPage
