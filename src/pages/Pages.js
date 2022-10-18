import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import PageCategory from './PageCategory';

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category/:type' element={<PageCategory />} />
    </Routes>
  )
}

export default Pages;