import React from 'react'
import Layout from '../components/layout/Layout'
import PageTitle from '../components/layout/PageTitle'
import ProjectCard from '../components/layout/ProjectCard'
import PortfolioTable from '../components/portfolio/PortfolioTable'

const PortfolioPage = () => {
  return (
    <Layout>
      <PageTitle title='Portfolio' />
      <ProjectCard />
      <PageTitle title='Archive' />
      <PortfolioTable />
    </Layout>
  )
}

export default PortfolioPage
