import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import TrendingSlider from './TrendingSlider';

const SearchElement = () => {
    let {searchItem}=useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
            const data = await api.json()
            setData(data.meals)
            // console.log(data);

        }
        fetchApi()
    }, [searchItem])

    
  return (
    <>
      <Navbar/>
      <div className='col_grid'>
                {
                    data.map((item) => {
                        return (
                            <Link to={`/${item.idMeal}`}  key={item.idMeal} className='link'>
                            <div className='card'>
                                <div className='cardImage'>
                                    <img src={item.strMealThumb} />
                                </div>
                                <h3>{item.strMeal}</h3>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>

      <TrendingSlider/>
    </>
  )
}

export default SearchElement
