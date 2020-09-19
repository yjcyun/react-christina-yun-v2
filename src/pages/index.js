import React from 'react'
import Featured from '../components/home/Featured'
import Hero from '../components/home/Hero'
import Hr from '../components/layout/Hr'
import Layout from '../components/layout/Layout'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Hr />
      <Featured />
    </Layout>
  )
}

export default Home
