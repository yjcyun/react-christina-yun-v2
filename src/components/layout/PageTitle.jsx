import React from 'react'
import styled from 'styled-components'

const PageTitle = ({title}) => {
  return (
    <PageTitleStyled>
      <h2>{title}</h2>
    </PageTitleStyled>
  )
}

const PageTitleStyled = styled.div`
  margin: 3rem auto 5rem;
  font-size: 2.5rem;
`

export default PageTitle