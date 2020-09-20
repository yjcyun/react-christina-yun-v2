import React from 'react'
import styled from 'styled-components'
import HomeGrid from './HomeGrid'
import Logo from './Logo'

const Footer = () => {
  return (
    <HomeGrid footer title='Contact'>
      <FootContent>
        <div>xtinayun.web [at] gmail.com</div>
        <a href='https://google.ca'>Github</a>
        <a href='https://google.ca'>LinkedIn</a>
      </FootContent>
      <MadeBy>Made by<Logo footer /></MadeBy>
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

  @media (min-width: 768px) {
    justify-content: flex-end;  margin-top: 0;
  }
`

export default Footer
