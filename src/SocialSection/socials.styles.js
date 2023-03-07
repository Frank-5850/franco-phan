import styled from "styled-components";

export const SocialsWrapper = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  @media (min-width: 100px) and (max-width: 1024px) {
    position: static;
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;

export const SocialsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 300px;
    margin: 0px auto;
    background-color: white;
    @media (min-width: 100px) and (max-width: 1024px) {
      content: none;
    }
  }
  @media (min-width: 100px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

export const IconBox = styled.li`
  padding: 5px;
`;

export const IconLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #f5f5f5;
  }
`;
