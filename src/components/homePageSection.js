import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const HomePageSection = props => (
  <StyledSection>
    <div>
      <h2>{props.title}</h2>
      <Link to={props.link.to}>{props.link.text}</Link>
    </div>
    {/* Image container */}
    <div>{props.children}</div>
  </StyledSection>
)

HomePageSection.propTypes = {
  title: PropTypes.string,
  link: PropTypes.objectOf(PropTypes.string),
}

export default HomePageSection
