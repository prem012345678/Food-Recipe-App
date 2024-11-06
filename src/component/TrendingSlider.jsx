import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom';
const TrendingSlider = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      const api = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      const data = await api.json()
      setData(data.meals)

    }
    fetchApi()
  }, [])

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (<>
    {
      <div className="main1">
        <Slider {...settings}>
          {
            data.map((item) => {
              return (
                <Link to={`/${item.idMeal}`} key={item.idMeal}>
                <div  className='image1'>
                  <img src={item.strMealThumb} />
                </div>
                </Link>
              )
            })
          }

        </Slider>
      </div>

    }
  </>)
}

export default TrendingSlider