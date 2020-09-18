import React from 'react'
import Featured from '../components/home/Featured'
import Hero from '../components/home/Hero'
import Layout from '../components/layout/Layout'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Featured />
    </Layout>
  )
}

export default Home
