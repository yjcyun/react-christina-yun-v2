import React from 'react'
import Layout from '../components/layout/Layout'
import PageTitle from '../components/layout/PageTitle'
import ProjectCard from '../components/layout/ProjectCard'
import PortfolioTable from '../components/portfolio/PortfolioTable'
import SEO from '../components/layout/SEO'

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title='Portfolio' />
      <PageTitle title='Portfolio' />
      <ProjectCard />
      <PortfolioTable />
    </Layout>
  )
}

export default PortfolioPage