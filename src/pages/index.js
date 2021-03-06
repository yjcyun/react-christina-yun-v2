import React from 'react'
import About from '../components/home/About'
import Featured from '../components/home/Featured'
import Hero from '../components/home/Hero'
import Hr from '../components/layout/Hr'
import Layout from '../components/layout/Layout'
import SEO from '../components/layout/SEO'


const Home = () => {
  return (
    <Layout>
      <SEO description='this is description'/>
      <Hero />
      <Hr />
      <Featured />
      <Hr />
      <About />
    </Layout>
  )
}

export default Home
