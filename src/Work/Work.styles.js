import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import {
  RiCheckboxBlankCircleLine,
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "react-icons/ri";

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  @media (min-width: 100px) and (max-width: 425px) {
    min-height: 80vh;
  }
`;

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 50vw;
  @media (min-width: 426px) and (max-width: 1024px) {
    width: 90vw;
  }
  @media (min-width: 100px) and (max-width: 425px) {
    width: 100vw;
  }
`;

export const SectionTitle = styled.h1`
  margin: 0 0 10px 0;
  @media (min-width: 100px) and (max-width: 425px) {
    margin: 0 0 10px 10px;
  }
`;

export const WorkCarousel = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (min-width: 426px) and (max-width: 768px) {
    justify-content: center;
  }
  @media (min-width: 100px) and (max-width: 425px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const PhotoLink = styled.a`
  text-decoration: none;
  border-radius: 5px;
  @media (min-width: 100px) and (max-width: 425px) {
    display: flex;
    flex-direction: center;
    align-items: center;
  }
`;

export const WorkPhoto = styled.img`
  width: 600px;
  height: 400px;
  border-radius: 5px;
  @media (min-width: 100px) and (max-width: 425px) {
    width: 95vw;
    height: auto;
  }
`;

export const WorkDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  width: 400px;
  background-color: black;
  position: absolute;
  right: 0;
  z-index: 1;
  padding: 10px;
  border-radius: 5px;
  @media (min-width: 100px) and (max-width: 425px) {
    width: 75vw;
    height: auto;
    position: relative;
    background-color: #6c757d;
  }
`;

export const WorkTitle = styled.h1`
  margin: 0 10px 10px 0;
  background-color: black;
  align-self: end;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
    align-self: start;
  }
`;

export const WorkDetail = styled.p`
  margin: 10px 0;
  background-color: black;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
  }
`;

export const TechList = styled.ul`
  margin: 0;
  display: flex;
  flex-flow: column wrap;
  height: 20%;
  background-color: black;
  padding: 0;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
  }
`;

export const Tech = styled.li`
  list-style: none;
  margin: 0;
  background-color: black;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
  }
`;

export const WorkLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: black;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
  }
`;

export const WorkLink = styled.a`
  text-decoration: none;
  margin: 0 5px;
  background-color: black;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
  }
`;

export const GithubIcon = styled(FaGithubSquare)`
  color: white;
  font-size: 1.5em;
  margin: 0 5px;
  background-color: black;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
  }
`;
export const WebsiteIcon = styled(MdOpenInNew)`
  color: white;
  font-size: 1.5em;
  margin: 0 5px;
  background-color: black;
  @media (min-width: 100px) and (max-width: 425px) {
    background-color: #6c757d;
  }
`;

export const CarouselController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 0;
`;

export const CarouselButton = styled.button`
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;

export const CarouselButtonLeft = styled(RiArrowLeftSLine)`
  color: white;
  cursor: pointer;
  margin: 0 10px;
`;

export const CarouselButtonRight = styled(RiArrowRightSLine)`
  color: white;
  cursor: pointer;
  margin: 0 10px;
`;

export const CurrentProjectIcon = styled(RiCheckboxBlankCircleLine)`
  color: white;
  margin: 0 5px;
  cursor: pointer;
`;
