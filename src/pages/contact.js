import React from 'react'
import Contact from '../components/contact/Contact'
import Layout from '../components/layout/Layout'
import PageTitle from '../components/layout/PageTitle'

const ContactPage = () => {
  return (
    <Layout>
      <PageTitle title='Contact' />
      <Contact />
    </Layout>
  )
}

export default ContactPage