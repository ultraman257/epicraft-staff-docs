import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const PunishmentPage = () => (
    <Layout>
        <SEO title="Punishment Guidelines" />
        <h1>Punishment Guidelines</h1>
        <h4>General</h4>
        <p>Player's have three strikes, after the final ban they do not have any rights of appeal with a permanent ban.</p>
        <h4>Griefing</h4>
        <p>Griefing is split into levels</p>
        <ul>
            <li>1-5 Blocks - 1 hour ban</li>
            <li>6-10 Blocks - 6 hour ban</li>
        </ul>
    </Layout>
)

export default PunishmentPage
