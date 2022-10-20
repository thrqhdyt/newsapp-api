import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/page-category.css'

function PageCategory() {
  const [ category, setCategory ] = useState([]);
  let params = useParams();
  
  const getCategory = async (name) => {
    const api = await fetch(`https://newsapi.org/v2/top-headlines?country=id&category=${name}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20`);
    const data = await api.json();
    setCategory(data.articles);
  }

  useEffect(() => {
    getCategory(params.type)
  }, [params.type])

  return (
    <div className='item-category'>
      {category.map((article) => {
        return (
          <a href={article.url} style={{textDecoration: 'inherit'}}>
            <div className='card-item' key={article.title}>
                <img src={article.urlToImage} alt={article.title} />
              <p>{article.title}</p>
            </div>
          </a>
        )
      })} 
    </div>
  )
}

export default PageCategory