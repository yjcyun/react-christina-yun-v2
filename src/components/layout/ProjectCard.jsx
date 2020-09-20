import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
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
    gotravel: file(relativePath: {eq: "gotravel.png"}) {
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
    </div>
  )
}

export default ProjectCard