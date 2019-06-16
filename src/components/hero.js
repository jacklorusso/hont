import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;

  div {
    height: 70vh;
  }
`
const HeroText = styled.h1`
  position: absolute;
  font-family: "Phantom Sans0.5";
  font-weight: 500;
  top: 25vh;
  /* TODO: add some responsive sizing here */
  left: 0;
  width: 100%;
  font-size: 2.5em;
  color: white;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
`

const Hero = props => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <HeroSection>
        <div>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <HeroText>Feel on top of the world.</HeroText>
      </HeroSection>
    )}
  />
)

export default Hero
