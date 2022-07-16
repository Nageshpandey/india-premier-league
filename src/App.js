import React, { Component } from 'react'
import Teams from './components/Home/Teams'
import Navbar from './components/NavBar/Navbar'
import Players from './components/PlayerPage/Players'
import About from './components/About/About'
import { Routes, Route } from 'react-router-dom'
import Schedule from './components/Schedule/Schedule'

export class App extends Component {
  render() {
    return (
     <>
      <Navbar/>
      
       <Routes>
       <Route exact path='/' element={<Teams/>}/>
        <Route  path='/players/:team' element={<Players/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/schedule' element={<Schedule/>}/>
       
       </Routes>
       </>
     
      
    )
  }
}

export default App
