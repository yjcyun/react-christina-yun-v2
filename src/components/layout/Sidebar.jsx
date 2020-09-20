import React from 'react'
import styled from 'styled-components'
import { NavLinks } from '../../constants/nav'
import { IoMdClose, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { MenuButton } from './Navbar'



const Sidebar = ({ open, setOpen,checkActive }) => {
  return (
    <SidebarStyled open={open}>
      <div>
        <SidebarTop>
          <div className='logo'>Christina Yun</div>
          <MenuButton onClick={() => { setOpen(!open) }}>
            <IoMdClose />
          </MenuButton>
        </SidebarTop>
        {NavLinks(checkActive)}
      </div>
      <SidebarFooter>
        <div>Social Media</div>
        <div>
          <a href='https://github.com/yjcyun'><IoLogoGithub /></a>
          <a href='https://github.com/yjcyun'><IoLogoLinkedin /></a>
        </div>
      </SidebarFooter>
    </SidebarStyled>
  )
}

const SidebarTop = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.3rem;
    font-family: var(--sec-ff);
  }
`

const SidebarStyled = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: var(--black);
  transform: ${props => props.open ? '0' : 'translateX(100vw)'};
  animation: slide 0.3s;
  transition: 0.3s;
  z-index: 100;
  padding: 0 2rem;

  li {
    padding: 0.5rem 0;
    font-size: 2.2rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`
const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem;
  justify-content: space-between;;
  margin-bottom: 1rem;

  a {
    font-size: 2rem;
    margin-right: 0.3rem;
  }
`

export default Sidebar