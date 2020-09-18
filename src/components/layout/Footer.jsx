import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Footer = () => {
  return (
    <FooterStyled>
      <div>Contacts</div>
      <FootContent>
        <div>xtinayun.web [at] gmail.com</div>
        <a href=''>Github</a>
        <a href=''>LinkedIn</a>
      </FootContent>
      <MadeBy>Made by<Logo footer /></MadeBy>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
`

const FootContent = styled.div`
  display: flex;
  flex-direction: column;
`

const MadeBy = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default Footer
