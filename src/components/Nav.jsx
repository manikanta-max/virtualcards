import React, { useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillGridFill } from 'react-icons/bs'
import Search from './Search'
import ListPage from './ListPage'

const routes = ['Your', 'All', 'Blocked']

const Nav = () => {

  const [searchResults, setSearchResult] = useState('')
  const [subCheck, setSubCheck] = useState(false)
  const [burCheck, setBurCheck] = useState(false)

  return (
    <>
      <div className='nav flex-between mt-5'>
        <div className='d-flex gap-4'>
          {routes.map((route) => (
            <NavLink activeclassname='active' className='link' to={route.toLowerCase()} key={route}>
              <span>{route}</span>
            </NavLink>
          ))}
        </div>
        <div className='flex-center gap-3'>
          <BsFillGridFill style={{ color: 'grey', fontSize: '14px' }} />
          <GiHamburgerMenu />
        </div>
      </div>
      <Search setSearchResult={setSearchResult} setSubCheck={setSubCheck} setBurCheck={setBurCheck} />
      <Routes>
        <Route path='/' element={<ListPage searchResults={searchResults} subCheck={subCheck} burCheck={burCheck} />} />
        <Route path='/all' element={<ListPage searchResults={searchResults} subCheck={subCheck} burCheck={burCheck} />} />
      </Routes>
    </>
  )
}

export default Nav