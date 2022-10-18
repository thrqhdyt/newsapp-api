import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../styles/sportnews.css'

function SportNews() {
  const [ sportNews, setSportNews ] = useState([]);
  
  const getSportNews = async () => {
    const api = await fetch(`https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=10`);
    const data = await api.json();
    setSportNews(data.articles);
  }

  useEffect(() => {
    getSportNews();
  }, [])

  return (
    <div className='sport-news'>
      <h2>Sports News</h2>
      <Splide options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '2rem'
        }}>
          {sportNews.map((article) => {
            return (
              <SplideSlide>
                <div className='card-sport'>
                  <img src={article.urlToImage} alt={article.title}/>
                  <p>{article.title}</p>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
    </div>
  )
}

export default SportNews