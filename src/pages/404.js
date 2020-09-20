import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/Layout'

const ErrorPage = () => {
  return (
    <Layout>
      <ErrorStyled className='min-height'>
        <ErrorMessage>
          <h2>404</h2>
          <p>Oops! Page not found.</p>
        </ErrorMessage>
      </ErrorStyled>
    </Layout>
  )
}
const ErrorStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorMessage = styled.div`
  border-radius: 50%;
  background-color: var(--accent-clr);
  padding: 3rem;
  width:15rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 4rem;
  }

  @media(min-width: 768px){
    width:20rem;
    height: 20rem;
  }
`

export default ErrorPage
