import React from 'react'
import { graphql, Link } from 'gatsby'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import styled from 'styled-components'
import HomeGrid from '../layout/HomeGrid'
import ProjectCard from '../layout/ProjectCard'

const Featured = () => {
  return (
    <FeaturedSection>
      <HomeGrid title='Featured Projects'>
        <ProjectCard />
      </HomeGrid>
      <FeaturedLink>
        <Link to='/portfolio'>
          See all projects<HiOutlineArrowNarrowRight className='icon' />
        </Link>
      </FeaturedLink>
    </FeaturedSection>
  )
}

const FeaturedSection = styled.section`
  @media (min-width: 996px) {
    margin: 8rem auto;
  }
`

const FeaturedLink = styled.div`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 4rem;

  a {
    border: 1px solid var(--accent-clr);
    padding: 1rem;
    border-radius: 5px;
  }

  .icon {
    font-size: 1.3rem;
    vertical-align: middle;
    margin-bottom: 3px;
    margin-left: 0.5rem;
    color: var(--accent-clr);
  }
`

export default Featured