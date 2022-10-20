import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa'
import '../styles/search.css'

function Search() {
  const [ input, setInput ] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`)
  }


  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <FaSearch />
        <input onChange={(e) => setInput(e.target.value)} type='text' value={input} />
      </div>
    </form>
  )
}

export default Search