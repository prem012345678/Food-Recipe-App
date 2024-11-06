import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'

const Category = () => {
    const { name } = useParams()

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const api = await fetch(`https:/www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
            const data = await api.json()
            setData(data.meals)
            // console.log(data);

        }
        fetchApi()
    }, [name])

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

export default Category