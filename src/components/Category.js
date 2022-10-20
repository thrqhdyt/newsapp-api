import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/category.css'

function Category() {
  return (
    <div className='category'>
      <NavLink className='nav-list' to={'/category/business'}>
        <h4>Business</h4>
      </NavLink>
      <NavLink className='nav-list' to={'/category/health'}>
        <h4>Health</h4>
      </NavLink>
      <NavLink className='nav-list' to={'/category/science'}>
        <h4>Science</h4>
      </NavLink>
      <NavLink className='nav-list' to={'/category/sports'}>
        <h4>Sports</h4>
      </NavLink>
      <NavLink className='nav-list item5' to={'/category/technology'}>
        <h4>Technology</h4>
      </NavLink>
    </div>
  )
}

export default Category;