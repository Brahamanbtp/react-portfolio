import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';
import projects from '../assets/data/projects';

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  background-color: var(--dark-bg);

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .swiper {
    padding-top: 6rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: var(--deep-dark);
    border-radius: 8px;
    color: var(--gray-1);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--gray-1);
      color: var(--deep-dark);
    }
  }

  .swiper-button-prev {
    right: 60px;
    left: auto;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 40px;
    }
  }
`;

export default function ProjectsSection() {
  const visibleProjects = projects.slice(0, 5); // Limit to 5 projects

  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle
          subheading="Some of my recent works"
          heading="Projects"
        />
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {visibleProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectItem
                title={project.name}
                img={project.img}
                desc={project.desc}
                link={project.link || '/projects'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ProjectSectionStyle>
  );
}
