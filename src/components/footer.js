import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 20px;
`
const Footer = props => (
  <StyledFooter>
    © {new Date().getFullYear()}. Himalayan Odyssey Nepal Trek (P) Ltd is a
    Government registered company.
  </StyledFooter>
)

export default Footer
