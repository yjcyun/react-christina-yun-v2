import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import './layout.css'

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <LayoutStyled>
      <Navbar open={open} setOpen={setOpen} />
      <Sidebar open={open} />
      <main>
        {children}
      </main>
      <Footer />
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  position: relative;
`

export default Layout