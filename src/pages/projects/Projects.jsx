import React from 'react'
import {imageData as data} from '../../helper/imageData'
import "./Projects.scss"


const Projects = () => {
  return (
    <div>

<main className="projects">
  <div className="projects__items">

    {
      data.map((e,index)=>(
        <div  className="projects__item">
      <img src={e.image} key={index} alt="My Project" />
    </div>

      ))
    }
   
    
    
  </div>
</main>



    </div>
  )
}

export default Projects