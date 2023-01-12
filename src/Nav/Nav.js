import React from "react";
import {
  NavWrapper,
  NavGroup,
  NavItem,
  Resume,
  NavContainer,
  NavLink,
  LogoImg,
  ResumeLink,
} from "./nav.styles";
import logo from "../assets/FP.png";

const Nav = () => {
  return (
    <NavContainer>
      <NavWrapper className="navbar">
        <NavGroup style={{ padding: "0" }}>
          <NavItem style={{ padding: "0" }}>
            <NavLink href="/">
              <LogoImg src={logo} alt="logo" />
            </NavLink>
          </NavItem>
        </NavGroup>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <i className="ri-menu-line"></i>
        </label>
        <NavGroup className="list">
          <NavItem>
            <NavLink href="#aboutMe">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#work">Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <Resume>
            <ResumeLink>Resume</ResumeLink>
          </Resume>
        </NavGroup>
      </NavWrapper>
    </NavContainer>
  );
};

export default Nav;
