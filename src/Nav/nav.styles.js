import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 5px;
  @media (min-width: 100px) and (max-width: 768px) {
    padding: 0;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 50px 150px 0 150px;
  @media (min-width: 100px) and (max-width: 768px) {
    padding: 10px;
  }
`;

export const NavGroup = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  padding: 0.5rem;
  margin: 0;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 4px;
  @media (max-width: 375px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 320px) {
    width: 40px;
    height: 40px;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  &:after {
    content: ""; /*Content property must be set else this element will not show up on the page. */
    width: 100%;
    height: 1px;
    background-color: white;
    border-radius: 4px; /*Applies roundness to the bar. */
    position: absolute; /*Allows for this element to be moved freely within the parent box that has the position of relative. */
    left: 0; /*Starting left position will be 0. */
    bottom: 0; /*Starting bottom position will be 0 since we want to place this element under the link text. */
    transform: scaleX(
      0
    ); /*We scale the width of this element on the X axis to 0 because we do not want to see it until hovered. */
    transform-origin: left; /*By default, transform origin is the center, meaning the bar would grow from the center if we don't change this. We set it to the left so that it grows from the left instead. */
    transition: transform 0.25s ease; /*Since we want to animate the transform property that is what we apply the transition to. */
  }
  &:hover::after {
    transform: scaleX(
      1
    ); /*When the link is hovered, we target the pseudo-element and turn the scaleX back to 1. This will make it grow back to the initial width of 100%. */
  }
  // &:hover {
  //   color: black;
  // }
  @media (max-width: 375px) {
    font-size: 1em;
  }
  @media (max-width: 320px) {
    font-size: 0.8em;
  }
`;

export const Resume = styled.li`
  padding: 0.5rem;
  margin: 0;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  position: relative;
`;

export const ResumeLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
