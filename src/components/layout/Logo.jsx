import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Logo = ({ footer }) => (
  <LogoStyled footer={footer}>
    <Link to='/'>XY.<span>Web</span></Link>
  </LogoStyled>
)

const LogoStyled = styled.div`
  a{
    padding-left: ${props => props.footer ? '5px' : '0'}
  }
  
  span{
    color: var(--accent-clr);
  }
`

export default Logo