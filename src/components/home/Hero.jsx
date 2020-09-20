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
  opacity: 1;
  animation-name: fadeIn;
  animation-iteration-count: 1;
	animation-timing-function: ease-in;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  span {
    color: var(--accent-clr);
  }

  @keyframes fadeIn {
    0%{
      opacity: 0;
      transform: translateY(15px);
    }
    100%{
      opacity: 1;
      transform: translateY(0)
    }
  }

  @media (min-width: 996px){
    font-size: 2.5rem;
    margin: 8rem auto 13rem;
  }
`


export default Hero
