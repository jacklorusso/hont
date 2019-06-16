import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logoFull from "../assets/images/logo-full.svg"

const StyledHeader = styled.header`
  height: 60px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.text};

  img {
    height: 30px;
    margin: 0;
  }
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <Link to="/">
        <img src={logoFull} alt="Himalayan Odyssey Nepal Trek logo" />
      </Link>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
