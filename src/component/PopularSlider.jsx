import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom';
const PopularSlider = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      const api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
      const data = await api.json()
      setData(data.meals)
      // console.log(data);

    }
    fetchApi()
  }, [])

  var settings = {
    infinite:true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    // cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (<>
    {
      <div className="main">
        <Slider {...settings}>
          {
            data.map((item) => {
              return (
                <Link to={`/${item.idMeal}`} key={item.idMeal}>
                <div key={item.idMeal} className='image'>
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

export default PopularSlider