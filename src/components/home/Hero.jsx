import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <HeroBody>
      Hello! My name is Christina.
      <br />
        I make <span>functional, modern, and minimalistic websites</span>, applications, and anything in between.<br />
        My main object is <span>frontend</span> web development.
    </HeroBody>
  )
}

const HeroBody = styled.div`
  margin: 8rem auto;
  height: 50vh;

  font-size: 2.5rem;
  span {
    color: var(--accent-clr);
  }
  margin-bottom: 8rem;
`


export default Hero
