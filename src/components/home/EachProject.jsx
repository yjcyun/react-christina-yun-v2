import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { IoIosGlobe, IoLogoGithub } from 'react-icons/io'
import Reveal from 'react-reveal/Reveal'

const EachProject = ({ image, name, children, live, code, stack1, stack2, stack3, stack4 }) => {
  return (
    <EachProjectStyled>
      <Reveal effect='fadeInUp'>
        <Image fluid={image} />
      </Reveal>
      <FeaturedDesc>
        <FeaturedDescTop>
          <Reveal effect='fadeInUp'>
            <div className='name'>{name}</div>
            <div className='stack'>
              <span>{stack1}</span>
              <span>{stack2}</span>
              <span>{stack3}</span>
              <span>{stack4}</span>
            </div>
            <div className='desc'>{children}</div>
          </Reveal>
        </FeaturedDescTop>
        <FeaturedLinks>
          <a href={live} target='_blank' aria-label='live' rel="noreferrer"><IoIosGlobe className='icon' />Live</a>

          <a href={code} target='_blank' aria-label='github' rel="noreferrer"><IoLogoGithub className='icon' />Code</a>
        </FeaturedLinks>
      </FeaturedDesc>
    </EachProjectStyled >
  )
}
const EachProjectStyled = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  grid-row-gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10rem; 
    grid-column-gap: 2rem;
    margin-bottom: 8rem;
  }
`

const FeaturedDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FeaturedDescTop = styled.div`
  .name {
    color: var(--light-grey);
  }
  .desc {
    margin: 2rem 0;
    font-size: 1.2rem;
  }
  .stack {
    color: var(--accent-clr);
    margin: 1rem 0;
    span {
      font-family: var(--sec-ff);
      margin-right: 1rem;
    }
  }
`

const FeaturedLinks = styled.div`
  a {
    margin-right: 1rem;
    font-family: var(--sec-ff);
  }

  .icon {
    font-size: 1.2rem;
    vertical-align: middle;
    margin-bottom: 3px;
    margin-right: 4px;
  }
`
export default EachProject