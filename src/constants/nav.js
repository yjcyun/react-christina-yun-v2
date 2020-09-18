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

export const NavLinks = nav.map(link => (
  <li key={link.id}>
    <Link to={link.link}>{link.text}</Link>
  </li>
));
