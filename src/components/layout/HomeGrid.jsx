import React from 'react'
import styled from 'styled-components'

const HomeGrid = ({ children, footer, title }) => {
  return (
    <HomeGridStyled footer={footer}>
      <div className='title'>{title}</div>
      {children}
    </HomeGridStyled>
  )
}

const HomeGridStyled = styled.section`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr;

  .title {
    margin-bottom: 2rem;
  }
 
  @media (min-width:996px){
    grid-template-columns: ${props => props.footer ? '1fr 4fr 2fr' : '1fr 6fr'};
    grid-gap: 2rem;
  }
`

export default HomeGrid