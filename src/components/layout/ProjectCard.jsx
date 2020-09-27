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
        A multi-page portfolio website built for an actress featured with a full biography page, blog, and gallery. Content easily maintainable by user using CMS(Strapi).
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
        An e-commerce website
      </EachProject>
    </div>
  )
}

export default ProjectCard