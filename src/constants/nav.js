import { Link } from 'gatsby';
import React from 'react';

const nav = [
  {
    id: 1,
    text: 'Portfolio',
    link: '/portfolio'
  },
  {
    id: 2,
    text: 'Contact',
    link: '/contact'
  }
];

export const NavLinks = ({ checkActive }) => {
  return nav.map(link => (
    <li key={link.id}>
      <Link
        activeClassName='selected'
        isactive={checkActive}
        to={link.link}
      >
        {link.text}
      </Link>
    </li>
  ))
}
