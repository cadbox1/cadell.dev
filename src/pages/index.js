import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CreatingCadellDev from "../articles/creating-cadell.dev";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CreatingCadellDev />
  </Layout>
)

export default IndexPage
