import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Contact = () => {
  return (
    <ContactStyled>
      <Fade bottom distance={'1.5rem'}>
        <p>If you are interested in working with me or have a project for which you need help develop <span>frontend</span>, please send me an email:</p>
      </Fade>
      <Fade bottom distance={'1.5rem'}>
        <p className='email'>contact [at] christinayun.ca</p>
      </Fade>
    </ContactStyled>
  )
}

const ContactStyled = styled.section`
  margin-bottom: 10rem;
  padding: 0;

  p {
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 1rem;

    span {
      color: var(--accent-clr);
    }
  }

  .email {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    p{
      width: 60%;
      margin-left: 20%;
      font-size: 1.1rem;
    }

    .email {
      font-size: 3rem;
    }
  }
`

export default Contact