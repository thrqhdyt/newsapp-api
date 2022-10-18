import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../styles/businessnews.css';

function BusinessNews() {
  const [ BusinessNews, setBusinessNews] = useState([]);

  const getBusinessNews = async () => {
    const api = await fetch(`https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=10`);
    const data = await api.json();
    setBusinessNews(data.articles);
  }

  useEffect(() => {
    getBusinessNews();
  }, [])

  return (
    <div className='business-news'>
      <h2>Business News</h2>
      <Splide options={{
        perPage: 4,
        arrows: true,
        pagination: false,
        drag: 'free',
        gap: '1.5rem'
      }}>
        {BusinessNews.map((article) => {
          return (
            <SplideSlide>
              <div className='card-business'>
                <img src={article.urlToImage} alt={article.title} />
                <p>{article.title}</p>
              </div>
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  )
}

export default BusinessNews