import React, { useEffect, useState } from "react";
import weather from "../assets/photos/Weather.jpg";
import eastBay from "../assets/photos/EastBay.jpg";
import {
  WorkWrapper,
  WorkContainer,
  SectionTitle,
  WorkCarousel,
  PhotoLink,
  WorkPhoto,
  WorkDetailContainer,
  WorkTitle,
  WorkDetail,
  TechList,
  Tech,
  WorkLinkContainer,
  WorkLink,
  GithubIcon,
  WebsiteIcon,
  CarouselController,
  CarouselButton,
  CurrentProjectIcon,
  CarouselButtonLeft,
  CarouselButtonRight,
} from "./Work.styles";

const Work = () => {
  const [project, setProject] = useState();

  const [index, setIndex] = useState(0);

  const currentProjects = [
    {
      name: "Weather App",
      description:
        "Simple weather application build using the Open-Weather API. Users are able to get the weather, 24 hour forecast and 7 day forecast for their current location or search a location.",
      link: "https://glassmorphic-weather.herokuapp.com/home",
      github: "https://github.com/Frank-5850/weather-react",
      tech: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "OpenWeatherMap",
        "styled-components",
      ],
      photo: weather,
    },
    {
      name: "East Bay Recorders",
      description:
        "East Bay Recorders is an intimate, vibey studio where real music gets made. I had the pleasure to modernize the front-end with Andrew Spivey.",
      link: "eastbayrecorders.com",
      github: "https://github.com/andrewjspivey/eastbay_recorders",
      tech: [
        "React",
        "Node",
        "styled-components",
        "Material UI",
        "React-Router",
      ],
      photo: eastBay,
    },
  ];

  useEffect(() => {
    setProject(currentProjects[index]);
  }, [index, currentProjects]);

  const nextProject = () => {
    if (index === currentProjects.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevProject = () => {
    if (index === 0) {
      setIndex(currentProjects.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <WorkWrapper id="work">
      <WorkContainer>
        <SectionTitle>Work</SectionTitle>
        {project && (
          <WorkCarousel>
            <PhotoLink href={project.link} target="_blank">
              <WorkPhoto src={project.photo} alt={project.name} />
            </PhotoLink>
            c
            <WorkDetailContainer>
              <WorkTitle>{project.name}</WorkTitle>
              <WorkDetail>{project.description}</WorkDetail>
              <TechList>
                {project.tech.map((tech) => (
                  <Tech key={tech}>{tech}</Tech>
                ))}
              </TechList>
              <WorkLinkContainer>
                <WorkLink href={project.github} target="_blank">
                  <GithubIcon />
                </WorkLink>
                <WorkLink href={project.link} target="_blank">
                  <WebsiteIcon />
                </WorkLink>
              </WorkLinkContainer>
            </WorkDetailContainer>
          </WorkCarousel>
        )}
        <CarouselController>
          <CarouselButton onClick={() => prevProject()}>
            <CarouselButtonLeft />
          </CarouselButton>
          {currentProjects.map((project, i) => (
            <CurrentProjectIcon
              onClick={() => setIndex(i)}
              fill={i === index ? "black" : "white"}
              key={i}
            />
          ))}
          <CarouselButton onClick={() => nextProject()}>
            <CarouselButtonRight />
          </CarouselButton>
        </CarouselController>
      </WorkContainer>
    </WorkWrapper>
  );
};

export default Work;
