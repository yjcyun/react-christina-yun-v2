import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import './layout.css'
import Hr from './Hr'

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <LayoutStyled>
      <Navbar open={open} setOpen={setOpen} />
      <Sidebar open={open} />
      <main className='main-padding'>
        {children}
        <Hr />
        <Footer />
      </main>
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  position: relative;
`

export default Layout