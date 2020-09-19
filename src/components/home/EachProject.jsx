import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import { BsFileCode } from 'react-icons/bs'

const EachProject = ({ image, name, children, live, code }) => {
  return (
    <>
      <Image fluid={image} />
      <FeaturedDesc>
        <FeaturedDescTop>
          <div className='name'>{name}</div>
          <div className='desc'>{children}</div>
        </FeaturedDescTop>
        <FeaturedLinks>
          <a href={live}><HiOutlineGlobeAlt className='icon' />Live</a>
          <a href={code}><BsFileCode className='icon' />Code</a>
        </FeaturedLinks>
      </FeaturedDesc>
    </>
  )
}

const FeaturedDesc = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FeaturedDescTop = styled.div`
  .name {
    margin-bottom: 3rem;
    color: var(--dark-grey);
  }
  .desc {
    font-size: 1.4rem;
    span {
      color: var(--accent-clr);
    }
  }
`

const FeaturedLinks = styled.div`
  margin-bottom: 2rem;

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
