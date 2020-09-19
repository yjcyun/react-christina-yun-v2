import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import styled from 'styled-components'
import EachProject from './EachProject'

const projectImages = graphql`
  {
    heather: file(relativePath: {eq: "heatherdick.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gotravel: file(relativePath: {eq: "gotravel.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Featured = () => {
  const data = useStaticQuery(projectImages)

  return (
    <FeaturedSection>
      <FeaturedProjects>
        <EachProject
          image={data.heather.childImageSharp.fluid}
          name='HEATHER DICK'
          live='https://heatherdick.ca'
          code='https://google.ca'
          stack1='Gatsby'
          stack2='Strapi'
        >
          A multi-page portfolio website built for an actress featured with a full biography page, blog, and gallery. Content easily maintainable by user using CMS(Strapi).
        </EachProject>

        <EachProject
          image={data.gotravel.childImageSharp.fluid}
          name='GO TRAVEL'
          live='https://google.ca'
          code='https://google.ca'
          stack1='React'
          stack2='Express'
          stack3='Node'
          stack4='MongoDB'
        >
          A travel agency website complete with an admin page where an user(admin) can easily maintain the database using CRUD operations.
        </EachProject>
      </FeaturedProjects>
      <FeaturedLink>
        <Link to='/portfolio'>
          See all projects<HiOutlineArrowNarrowRight className='icon' />
        </Link>
      </FeaturedLink>
    </FeaturedSection>
  )
}

const FeaturedSection = styled.section`
  margin: 8rem auto;
`
const FeaturedProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 13rem; 
  margin-bottom: 8rem;
`

const FeaturedLink = styled.div`
  text-align: center;
  font-size: 1.3rem;

  .icon {
    font-size: 1.3rem;
    vertical-align: middle;
    margin-bottom: 3px;
    margin-left: 0.5rem;
    color: var(--accent-clr);
  }
`


export default Featured
