import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        siteTitle: title
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const {
    siteDescription,
    siteTitle
  } = site.siteMetadata;

  return (
    <Helmet title={title ? `${title} | ${siteTitle} ` : `${siteTitle}`}>
      <meta name='description' content={description || siteDescription} />
    </Helmet>
  )
}

export default SEO
