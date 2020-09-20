import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <HeroBody>
      Hello! My name is Christina.
      <br />
        I make <span>functional, modern, and minimalistic websites</span>, applications, and anything in between.<br />
        My primary interest lie in <span>frontend</span> web development.
    </HeroBody>
  )
}

const HeroBody = styled.div`
  margin: 3rem auto 5rem;
  font-size: 1.5rem;

  span {
    color: var(--accent-clr);
  }

  @media (min-width: 996px){
    font-size: 2.5rem;
    margin: 8rem auto 13rem;
  }
`


export default Hero
