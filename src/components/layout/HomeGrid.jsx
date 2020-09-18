import React from 'react'
import styled from 'styled-components'

const HomeGrid = ({ children, footer, title }) => {
  return (
    <HomeGridStyled footer={footer}>
      <div>{title}</div>
      {children}
    </HomeGridStyled>
  )
}

const HomeGridStyled = styled.section`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: ${props => props.footer ? '1fr 4fr 1fr' : '1fr 5fr'};
`

export default HomeGrid