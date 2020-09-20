import React from 'react'
import styled from 'styled-components'

const PageTitle = ({ title, subtitle }) => {
  return (
    <PageTitleStyled subtitle={subtitle}>
      <h2>{title}</h2>
    </PageTitleStyled>
  )
}

const PageTitleStyled = styled.div`
  margin: ${props => props.subtitle ? '3rem 1rem 1rem' : '3rem auto 5rem'};

  h2{
    font-size: 3.5rem;
    font-weight: 500;
  }

  @media(min-width: 768px) {
    h2{
      font-size: ${props => props.subtitle ? '4rem' : '8rem'};
    }
  }
`

export default PageTitle