import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import './layout.css'
import Hr from './Hr'

const checkActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === '/';
}

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <LayoutStyled>
      <Navbar open={open} setOpen={setOpen} checkActive={checkActive} />
      <Sidebar open={open} setOpen={setOpen} checkActive={checkActive} />
      <main className='main-padding'>
        <div className='min-height'>{children}</div>
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