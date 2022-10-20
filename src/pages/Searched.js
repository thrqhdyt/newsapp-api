import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/result-search.css'

function Searched() {
  const [ search, setSearch ] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const api = await fetch(`https://newsapi.org/v2/everything?q=${name}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20`);
    const data = await api.json();
     setSearch(data.articles)
     console.log(data)
  }

  useEffect(() => {
    getSearched(params.search);
  }, [params.search])
  return (
    <div className='result-search'>
      {search.map((item) => {
        return (
          <a href={item.url} style={{textDecoration: 'inherit'}}>
            <div key={item.title} className='card-search'>
              <img src={item.urlToImage} alt={item.title}/>
              <p>{item.title}</p>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default Searched