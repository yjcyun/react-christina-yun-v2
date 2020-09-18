import React from 'react'
import styled from 'styled-components'
import { NavLinks } from '../../constants/nav'

const Sidebar = ({ open }) => {
  return (
    <SidebarOverlay open={open}>
      <SidebarStyled>
        {NavLinks}
      </SidebarStyled>
    </SidebarOverlay>
  )
}
const SidebarOverlay = styled.div`
  height: 100%;
  width: calc(100% - 75vw);
  position: fixed;
  left: 0;
  top: 5rem;
  /* background-color: rgba(0,0,0,0.7); */
  transform: ${props => props.open ? '0' : 'translateX(-100vw)'};
  animation: slide 0.3s;
  transition: 0.3s;

  @media (min-width: 768px) {
    display: none;
  }
`
const SidebarStyled = styled.aside`
  position: fixed;
  width: min(75vw, 400px);
  height: 100%;
  top: 5rem;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  background-color: #262626;

  li {
    padding: 2rem 0;
  }

  @keyframes slide {
    from {right}
  }
`


export default Sidebar