import React from 'react'
import styled from 'styled-components'
import HomeGrid from './HomeGrid'
import Reveal from 'react-reveal/Reveal'

const Footer = () => {
  return (
    <HomeGrid footer title='Contact'>
      <Reveal effect='fadeInUp'>
        <FootContent>
          <div>contact [at] christinayun.ca</div>
          <a href='https://github.com/yjcyun'>Github</a>
          <a href='https://www.linkedin.com/in/xtina-yun/'>LinkedIn</a>
        </FootContent>
        <MadeBy>Made by Christina Yun</MadeBy>
      </Reveal>
    </HomeGrid>
  )
}

const FootContent = styled.div`
  display: flex;
  flex-direction: column;
`

const MadeBy = styled.div`
  display: flex;
  margin-top: 2rem;

  @media (min-width: 996px) {
    justify-content: flex-end;  
    margin-top: 0;
  }
`

export default Footer