import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  @media (min-width: 100px) and (max-width: 425px) {
    margin: 25px 0;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  @media (min-width: 426px) and (max-width: 1024px) {
    width: 90vw;
    align-items: center;
  }
  @media (min-width: 100px) and (max-width: 425px) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 50vw;
  @media (min-width: 100px) and (max-width: 425px) {
    height: 100vh;
    width: 95vw;
  }
`;

export const SectionTitle = styled.h1`
  margin: 0 0 10px 0;
  @media (max-width: 320px) {
    margin: 0;
  }
`;

export const SectionText = styled.p`
  margin: 10px 0;
`;

export const SkillSection = styled.ul`
  margin: 0;
  display: flex;
  flex-flow: column wrap;
  height: 20%;
  @media (max-width: 320px) {
    flex-flow: column;
  }
`;

export const Skills = styled.li`
  margin: 0;
`;

export const PhotoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
  @media (min-width: 426px) and (max-width: 768px) {
    height: 300px;
    align-items: center;
  }
  @media (min-width: 100px) and (max-width: 425px) {
    width: 100%;
    height: 300px;
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 5px;
  @media (min-width: 426px) and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: 100px) and (max-width: 425px) {
    width: 80vw;
  }
`;
