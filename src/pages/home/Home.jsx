import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import "./Home.scss"

const Home = () => {
    const navigate= useNavigate()



  return (
    <div className="home-bgImg-container">

<main className="home">
  <h2>Hi! My Name Is</h2>
  <h1 className="home__name">
    Wednesday <span className="home__name--last">Addams</span>
  </h1>
  <h2>Full Stack Web Developer</h2>
</main>
  
    </div>
  )
}

export default Home