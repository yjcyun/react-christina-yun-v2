import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-reveal/Reveal'

const Hr = () => {
  return (
    <Reveal effect='fadeInUp'>
    <HrStyled></HrStyled>
    </Reveal>
  )
}

const HrStyled = styled.div`
  height: 1px;
  width: 100%;
  background-color: #888888;
`

export default Hr