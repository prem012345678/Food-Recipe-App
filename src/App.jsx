
import React from 'react'
import Home from './component/Home'
// import BrowserRouter from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipeId from './component/RecipeId'
import Category from './component/Category'
import SearchElement from './component/SearchElement'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:idMeal' element={<RecipeId />} />
          <Route path='/category/:name' element={<Category />} />
          <Route path='/search/:searchItem' element={<SearchElement/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
