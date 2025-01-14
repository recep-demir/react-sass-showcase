import React from 'react'
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import PrivateRouter from './PrivateRouter';
import Contact from '../pages/contact/Contact';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../pages/projects/Projects';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  return (
    <div>

  <BrowserRouter>
  <Navbar/>

   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>



      <Route path='/contact' element={<PrivateRouter/>}>
        <Route path='' element={<Contact/>} />

      </Route>

    </Routes>
  


  </BrowserRouter>
  <Footer/>
  </div>
  )
}

export default AppRouter