import React from 'react'
import Layout from '../components/layout/Layout'
import PageTitle from '../components/layout/PageTitle'
import ProjectCard from '../components/layout/ProjectCard'
import PortfolioTable from '../components/portfolio/PortfolioTable'
import Reveal from 'react-reveal/Reveal'

const PortfolioPage = () => {
  return (
    <Layout>
    
        <PageTitle title='Portfolio' />
        <ProjectCard />
        <PortfolioTable />
    </Layout>
  )
}

export default PortfolioPage
