import React from 'react'
import styled from 'styled-components'
import HomeGrid from './HomeGrid'
import Logo from './Logo'

const Footer = () => {
  return (
    <HomeGrid footer title='Contact'>
      <FootContent>
        <div>xtinayun.web [at] gmail.com</div>
        <a href=''>Github</a>
        <a href=''>LinkedIn</a>
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
  justify-content: flex-end;
`

export default Footer
