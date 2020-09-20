import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { archive } from '../../constants/archive'
import { IoIosGlobe, IoLogoGithub } from 'react-icons/io'
import { BsDot } from 'react-icons/bs'


const renderArchive = () => {
  // SORT BY ID
  let sortedArchive = archive.sort((a, b) => a.id > b.id ? -1 : b.id > a.id ? 1 : 0);

  return sortedArchive.map(({ id, year, title, builtwith, link1, link2 }) => (
    <tr key={id}>
      {/* <td className='year'>{year}</td> */}
      <td>{title}</td>
      <td className='built-with'>{builtwith.map((el, i) => (
        <span>{el}<span className='icon'>
          {i !== builtwith.length - 1 && <BsDot />}</span>
        </span>
      ))}</td>

      <td className='links'>
        <a target='_blank' href={link1}><IoIosGlobe /></a>
        <a target='_blank' href={link2}><IoLogoGithub /></a>
      </td>
    </tr>
  ))
}

const PortfolioTable = () => {
  return (
    <div>
      <TableStyled>
        <thead>
          <tr>
            {/* <th>Year</th> */}
            <th>Title</th>
            <th className='built-with'>Built with</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {renderArchive()}
        </tbody>
      </TableStyled>
    </div>
  )
}

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin-bottom: 5rem;

  th {
    color: #444;
  }

  th, td {
    padding: 1rem;
    padding-left: 0;
  }

  td a{
    font-size: 1.3rem;
    &:first-child {
      margin-right: 1rem;
    }
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