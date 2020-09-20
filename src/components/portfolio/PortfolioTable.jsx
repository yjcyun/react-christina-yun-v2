import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { archive } from '../../constants/archive'
import { IoIosGlobe, IoLogoGithub } from 'react-icons/io'
import { BsDot } from 'react-icons/bs'
import PageTitle from '../layout/PageTitle'
import Fade from 'react-reveal/Fade'

const renderArchive = () => {
  // SORT BY ID
  let sortedArchive = archive.sort((a, b) => a.id > b.id ? -1 : b.id > a.id ? 1 : 0);

  return sortedArchive.map(({ id, year, title, builtwith, link1, link2 }) => (
    <tr key={id} className='table-content'>
      {/* <td className='year'>{year}</td> */}
      <td className='title'>{title}</td>
      <td className='built-with'>{builtwith.map((el, i) => (
        <span key={i}>{el}<span className='icon'>
          {i !== builtwith.length - 1 && <BsDot />}</span>
        </span>
      ))}</td>

      <td className='links'>
        <a target='_blank' aria-label='live' rel="noreferrer" href={link1}><IoIosGlobe /></a>
        <a target='_blank' aria-label='github' rel="noreferrer" href={link2}><IoLogoGithub /></a>
      </td>
    </tr>
  ))
}

const PortfolioTable = () => {
  return (
    <>
      <PageTitle title='Archive' subtitle />
      <TableStyled>
        <thead>
          <tr className='table-head'>
            {/* <th>Year</th> */}
            <th className='title'>Title</th>
            <th className='built-with'>Built with</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          <Fade bottom cascade>
            {renderArchive()}
          </Fade>
        </tbody>
      </TableStyled>
    </>
  )
}

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin-bottom: 8rem;

  th {
    color: #444;
  }

  th, td {
    padding: 0.5rem 0;
    padding-left: 0;
  }

  td a{
    font-size: 1.3rem;
    &:first-child {
      margin-right: 1rem;
    }
  }

  @media(min-width:768px) {
    th, td {
      padding: 1rem;
    }
    .title {
      padding-left: 1rem;
    }
  }

  .table-content:hover {
    background-color: var(--dark-grey);
  }

  .built-with {
    font-family: var(--sec-ff);
  }

  .year {
      color: var(--accent-clr);
  }

  .icon {
    height: 100%;
    vertical-align: middle;
  }

  .links {
    display: flex;
    align-items: center;
    height: 100%;
  }

  @media (max-width:767px) {
    .built-with {
      display: none;
    }
  }
`

export default PortfolioTable