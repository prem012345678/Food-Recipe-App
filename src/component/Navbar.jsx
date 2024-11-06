import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [showMenu, setRight] = useState(false)
  const [input, setInput] = useState('')
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${input}`)
  }

  const handleToggle = () => {
    setRight(!showMenu)
  }

  return (<>
    <div className="nav">
      <Link to={'/'} className='left'>
        <h2>Food-App</h2>
      </Link>

      <div className='search'>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Search' onChange={(e) => setInput(e.target.value)} />
        </form>
      </div>
      <div className={`right ${showMenu ? 'mobile-menu' : 'menuBar'}`}>
        <Link to={'/category/indian'} className='link'>Indian</Link>
        <Link to={'/category/chinese'} className='link'>chinese</Link>
        <Link to={'/category/british'} className='link'>British</Link>
        <Link to={'/category/thai'} className='link'>Thai</Link>
      </div>

      <div className='menu-bar'>
        <button onClick={handleToggle} >
         <span> <FaBars /></span>
        </button>
      </div>
    </div>

  </>)
}

export default Navbar