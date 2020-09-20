import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Logo = ({ footer }) => (
  <LogoStyled footer={footer}>
    <Link to='/'>Christina Yun</Link>
  </LogoStyled>
)

const LogoStyled = styled.div`
  font-family: var(--sec-ff);
  a{
    padding-left: ${props => props.footer ? '5px' : '0'}
  }
`

export default Logo