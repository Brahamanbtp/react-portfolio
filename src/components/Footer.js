import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .footer__col1,
  .footer-text {
    text-align: justify;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Pranay Sharma</h1>
          <PText className="footer-text">
            A Software developer from Rajasthan, India.I always make websites
            that have unique designs and also has a good performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Blogs',
                path: '/blogs',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+916375626725',
                path: 'tel:+916375626725',
              },
              {
                title: 'pranaysharma5626@gmail.com',
                path: 'mailto:pranaysharma5626@gmail.com',
              },
              {
                title: 'Jayanti Nagar, Bharatpur, Rajasthan-321001, India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/Brahamanbtp',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/pranay-sharma-9a145b226/',
              },
              {
                title: 'Facebook',
                path: '',
              },
              {
                title: 'Instagram',
                path: '',
              },
              {
                title: 'Twitter',
                path: '',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2025 - Pranay Sharma | Designed By{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}