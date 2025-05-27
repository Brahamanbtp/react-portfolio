import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title = 'Web Development'
            desc = "Building responsive, high-performance websites and applications using modern technologies to bring ideas to life on the web."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="AI & Machine Learning"
            desc="Designing intelligent systems that learn, adapt, and make data-driven decisions using Python, machine learning models, and real-world datasets."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Basic Cybersecurity"
            desc="Understanding and applying fundamental cybersecurity principles to help protect systems and data from common threats and vulnerabilities."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}