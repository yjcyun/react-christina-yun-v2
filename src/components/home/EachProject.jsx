import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import { BsFileCode } from 'react-icons/bs'

const EachProject = ({ image, name, children, live, code, stack1, stack2, stack3, stack4 }) => {
  return (
    <EachProjectStyled>
      <Image fluid={image} />
      <FeaturedDesc>
        <FeaturedDescTop>
          <div className='name'>{name}</div>
          <div className='stack'>
            <span>{stack1}</span>
            <span>{stack2}</span>
            <span>{stack3}</span>
            <span>{stack4}</span>
          </div>
          <div className='desc'>{children}</div>
        </FeaturedDescTop>
        <FeaturedLinks>
          <a href={live}><HiOutlineGlobeAlt className='icon' />Live</a>
          <a href={code}><BsFileCode className='icon' />Code</a>
        </FeaturedLinks>
      </FeaturedDesc>
    </EachProjectStyled>
  )
}
const EachProjectStyled = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  grid-row-gap: 2rem;
  margin-bottom: 8rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10rem; 
    grid-column-gap: 2rem;
  }
`

const FeaturedDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FeaturedDescTop = styled.div`
  .name {
    color: var(--dark-grey);
  }
  .desc {
    margin: 2rem 0;
    font-size: 1.2rem;
    span {
      color: var(--accent-clr);
    }
  }
  .stack {
    color: var(--accent-clr);
    margin: 1rem 0;
    span {
      font-family: var(--sec-ff);
      margin-right: 1rem;
    }
  }
`

const FeaturedLinks = styled.div`
  a {
    margin-right: 1rem;
    font-family: var(--sec-ff);
  }

  .icon {
    font-size: 1.2rem;
    vertical-align: middle;
    margin-bottom: 3px;
    margin-right: 4px;
  }
`
export default EachProject