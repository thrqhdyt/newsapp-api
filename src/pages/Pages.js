import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import PageCategory from './PageCategory';
import Searched from './Searched';

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category/:type' element={<PageCategory />} />
      <Route path='/searched/:search' element={<Searched />} />
    </Routes>
  )
}

export default Pages;