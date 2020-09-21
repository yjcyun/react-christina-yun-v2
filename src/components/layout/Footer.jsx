import React from 'react'
import styled from 'styled-components'
import HomeGrid from './HomeGrid'
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <HomeGrid footer title='Contact'>
      <FootContent>
        <Fade bottom cascade>
          <div>contact [at] christinayun.ca</div>
          <a href='https://github.com/yjcyun'>Github</a>
          <a href='https://www.linkedin.com/in/xtina-yun/'>LinkedIn</a>
        </Fade>
      </FootContent>
      <MadeBy>
        <Fade bottom cascade>Made by Christina Yun</Fade>
      </MadeBy>
    </HomeGrid>
  )
}

const FootContent = styled.div`
  display: flex;
  flex-direction: column;
  a:hover {
    color: var(--accent-clr);
  }
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