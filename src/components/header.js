import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logoFull from "../assets/images/logo-full.svg"

const StyledHeader = styled.header`
  height: ${props => props.theme.scale[8]};
  padding-left: ${props => props.theme.scale[4]};
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.text};

  img {
    height: 30px;
    margin: 0;
  }
`

const StyledNav = styled.nav`
  padding-top: ${props => props.theme.scale[3]};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    padding-right: ${props => props.theme.scale[4]};
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Link to="/">
        <img src={logoFull} alt="Himalayan Odyssey Nepal Trek logo" />
      </Link>
      <StyledNav>
        <Link to="/about">Treks</Link>
        <Link to="/about">About</Link>
        <Link to="/about">Contact</Link>
      </StyledNav>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
