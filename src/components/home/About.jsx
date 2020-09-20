import React from 'react'
import styled from 'styled-components'
import HomeGrid from '../layout/HomeGrid'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const bioImage = graphql`
  {
    bio: file(relativePath: {eq: "Untitled.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(bioImage);

  return (
    <AboutSection>
      <HomeGrid title='About'>
        <AboutWrapper>
          <AboutBody>
            I am a frontend developer based in Toronto, ON.<br />
        I enjoy building beautiful and functional things on the web, and am always open to learning new technologies. During my free time, I study and practice coding, spend time with my dogs, and bake vegan goodies.<br /><br />
        Here are a few technologies I've been working with:
        <ul>
              <li>HTML/CSS</li>
              <li>Javascript/React</li>
              <li>MongoDB/Mongoose</li>
              <li>Node/Express</li>
            </ul>
          </AboutBody>
          <ImageWrapper>
            <Image style={{ opacity: '0.5' }} fluid={data.bio.childImageSharp.fluid} />
          </ImageWrapper>
        </AboutWrapper>
      </HomeGrid>
    </AboutSection>
  )
}

const AboutSection = styled.section`
  @media (min-width: 996px) {
    margin: 4rem auto;
  }
`

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 3fr 2fr;
  }
  grid-gap: 2rem;
`

const AboutBody = styled.div`
  font-size: 1.2rem;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-left: 1.5rem; 
    grid-gap: 0.5rem;
    margin: 1rem 0 2rem 1.5rem;
  }
  li {
    list-style: square;
    color: var(--accent-clr);
    font-family: var(--sec-ff);
    font-size: 1rem;
  }
`

const ImageWrapper = styled.div``
export default About
