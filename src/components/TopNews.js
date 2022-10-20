import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../styles/topnews.css';

function TopNews() {
  const [ topNews, setTopNews ] = useState([])

  const getTopNews = async () => {
    const api = await fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=10`);
    const data = await api.json();
    setTopNews(data.articles)
  }

  useEffect(() => {
    getTopNews();
  }, []);


  return (
    <div className='topnews'>
      <h2>Top News</h2>
      <Splide options={{
        perPage: 1, 
        arrows: true,
        pagination: true,
        drag: 'free',
        gap: '2rem',
        rewind: true,
        autoplay: true,
        pauseOnHover: false
      }}>
        {topNews.map((article) => {
          return (
            <SplideSlide key={article.title}>
              <a href={article.url}>
                <div className='card'>
                  <img src={article.urlToImage} alt={article.title} />
                  <p>{article.title}</p>
                </div> 
              </a>
            </SplideSlide>
          )
          })}
      </Splide>
    </div>
  )
}

export default TopNews;