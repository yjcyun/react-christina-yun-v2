import React from 'react'
import styled from 'styled-components'
import HomeGrid from '../layout/HomeGrid'

const Hero = () => {
  return (
    <HomeGrid title='Intro'>
      <HeroBody>
        Hello! My name is Christina.
        <br />
        I make <span>functional, modern, and minimalistic websites</span>, applications, and anything in between.<br />
        My main focus is on <span>frontend</span> web development.
      </HeroBody>
    </HomeGrid>
  )
}

const HeroBody = styled.div`
  font-size: 2.5rem;
  span {
    color: var(--accent-clr);
  }
  margin-bottom: 8rem;
`


export default Hero
