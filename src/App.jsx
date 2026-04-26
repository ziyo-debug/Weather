import React from 'react'
import Home from './pages/Home'
import Weather from './pages/Timezone'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import axios from 'axios'
import Timezone from './pages/Timezone'


const App = () => {
  return (
    <div>
<BrowserRouter>
<Navbar />
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/timezones' element={<Timezone />}/>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
