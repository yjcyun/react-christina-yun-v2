import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Hero = () => {
  return (
    <Fade bottom cascade distance={'1.5rem'} duration={2500}>
      <HeroBody>
        Hello! My name is Christina.<br/>
        I make <span className='accent'>functional, modern, and minimalistic websites</span>, applications, and anything in between.<br />
        My primary interest lies in <span className='accent'>frontend</span> web development.
    </HeroBody>
    </Fade>
  )
}

const HeroBody = styled.div`
  margin: 3rem auto 5rem;
  font-size: 1.5rem;

 .accent {
    color: var(--accent-clr);
  }

  @media (min-width: 996px){
    font-size: 2.5rem;
    margin: 8rem auto 13rem;
  }
`

export default Hero