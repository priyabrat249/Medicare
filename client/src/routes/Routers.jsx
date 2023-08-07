import React from 'react'
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Services from '../pages/Services';
import Signup from '../pages/Signup';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Doctors from '../pages/Doctors/Doctors';
import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/doctorDetails' element={<DoctorDetails />}></Route>
          <Route path='/doctors' element={<Doctors />}></Route>
          
    </Routes>
  )
}

export default Routers