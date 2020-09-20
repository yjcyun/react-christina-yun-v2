import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { CgMenuRight } from 'react-icons/cg'
import { NavLinks } from '../../constants/nav'
import styled from 'styled-components'
import Logo from './Logo'



const Navbar = ({ open, setOpen, checkActive }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y;
    if (isShow !== hideOnScroll) setHideOnScroll(isShow);
  }, [hideOnScroll]);

  return (
    <Header show={hideOnScroll} top={!hideOnScroll}>
      <Link to='/' className='logo'>Christina Yun</Link>
      <MenuButton onClick={() => setOpen(!open)}>
        <CgMenuRight />
      </MenuButton>
      <NavbarStyled>
        {NavLinks(checkActive)}
      </NavbarStyled>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1170px;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 5rem;
  z-index: 99;
  background-color: var(--black);
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.2s ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => props.show ? 'none' : 'translate(0, -100%)'};
`

const NavbarStyled = styled.nav`
  display: none;

  li {
    list-style: none;
    padding-left: 2rem;
    font-family: var(--sec-ff);
  }

  @media (min-width: 768px) {
    display: flex;
  }
`

export const MenuButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;

  @media (min-width: 768px) {
    display: none
  }
`
export default Navbar