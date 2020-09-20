import React from 'react'
import Contact from '../components/contact/Contact'
import Layout from '../components/layout/Layout'
import PageTitle from '../components/layout/PageTitle'
import SEO from '../components/layout/SEO'

const ContactPage = () => {
  return (
    <Layout>
       <SEO title='Contact' />
      <PageTitle title='Contact' />
      <Contact />
    </Layout>
  )
}

export default ContactPage