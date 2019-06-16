import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { regex: "/hero.jpg/" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
