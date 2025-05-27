import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    text-align: justify;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div data-aos="fade-left" className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Pranay Sharma</span>
              </p>
              <h2 className="about__heading">A Software Engineer</h2>
              <div className="about__info">
                <PText>
                  I am from Rajasthan, India.I love art and design. I always
                  try to design stuff with my unique point of view.I also love
                  to create things that can be useful to others.
                  <br /> <br />
                  I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button btnText="Download Resume" btnLink="https://drive.google.com/file/d/1wvrxe9PL121CjDZ6onRY4JfkeHd1Z2Qe/view?usp=sharing" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Jaswant V.B.S. Sr. Sec. School, Bharatpur, Rajasthan']}
              />
              <AboutInfoItem
                title="Collage"
                items={['VIT University, Chenna']}
              />
              
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Comfortable"
                items={[
                  'HTML5',
                  'CSS3',
                  'JavaScript',
                  'React',
                  'Bootstrap',
                  'Tailwind CSS',
                  'Material-UI',
                  'Rest API',
                ]}
              />
              <AboutInfoItem title="Database" items={['MySQL', 'MongoDB']} />
              <AboutInfoItem
                title="Tools"
                items={[
                  'Git',
                  'Github',
                  'VS-Code',
                  'Chrome Dev Tool',
                  'Firebase',
                  'Netlify',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title=""
                items={['']}
              />
              <AboutInfoItem
                title=""
                items={['']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}