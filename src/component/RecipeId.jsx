import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { useParams } from 'react-router-dom'

const RecipeId = () => {
    let { idMeal } = useParams()

    const [data, setData] = useState([])
    const [active, setActive] = useState('ingredient')
    useEffect(() => {
        const fetchApi = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            const data = await api.json()
            setData(data.meals[0])

        }
        fetchApi()
    }, [idMeal])


    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>{data.strMeal}</h1>

                <div className='grid_col2'>
                    <div className='imgRec'>
                        <img src={data.strMealThumb} />
                    </div>
                    <div className='btn'>
                        <button onClick={() => setActive('ingredient')}>ingredient</button>
                        <button onClick={() => setActive('instruction')}>instruction</button>

                        {
                            active === 'ingredient' ? (<div>
                                <p>{data.strIngredient1} - {data.strMeasure1} </p>
                                <p>{data.strIngredient2} - {data.strMeasure2} </p>
                                <p>{data.strIngredient3} - {data.strMeasure3} </p>
                                <p>{data.strIngredient4} - {data.strMeasure4} </p>
                                <p>{data.strIngredient5} - {data.strMeasure5} </p>
                                <p>{data.strIngredient6} - {data.strMeasure6} </p>
                            </div>) : <p>{data.strInstructions}</p>

                        }

                    </div>
                </div>
            </div>

            <TrendingSlider />
        </>
    )
}

export default RecipeId





