import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import EachProject from '../home/EachProject'

const projectImages = graphql`
  {
    heather: file(relativePath: {eq: "heatherdick.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reactfitandco: file(relativePath: {eq: "reactfitandco.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vecaf: file(relativePath: {eq: "vecaf.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ProjectCard = () => {
  const data = useStaticQuery(projectImages)

  return (
    <div>
      <EachProject
        image={data.heather.childImageSharp.fluid}
        name='HEATHER DICK'
        live='https://heatherdick.ca'
        code='https://google.ca'
        stack1='Gatsby'
        stack2='Strapi'
      >
        A multi-page personal portfolio built for a well-known actor in Toronto. Featured with a full biography page, blog, and gallery. 
      </EachProject>
      <EachProject
        image={data.reactfitandco.childImageSharp.fluid}
        name='ReactFit&Co'
        live='https://reactfitandco.herokuapp.com/'
        code='https://github.com/yjcyun/ReactFit'
        stack1='React'
        stack2='Express'
        stack3='Node'
        stack4='MongoDB'
      >
        A fullstack e-commerce website featuring add-to-cart functionality, user authentication, and user reviews section.
      </EachProject>
      <EachProject
        image={data.vecaf.childImageSharp.fluid}
        name='Vecaf'
        live='https://vecaf.netlify.app'
        code='https://github.com/yjcyun/VeCaf'
        stack1='Gatsby'
        stack2='Styled-components'
      >
        Simple website for a cafe/restaurant. Design cloned from  <a href='https://vip-restaurant.vamtam.com' target='_blank' rel="noreferrer">https://vip-restaurant.vamtam.com</a>
      </EachProject>
    </div>
  )
}

export default ProjectCard