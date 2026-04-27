import React from 'react'
import Home from './pages/Home'
import Weather from './pages/Timezone'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import axios from 'axios'


const App = () => {
  return (
    <div>
<Navbar />

<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/weather' element={<Weather />}/>
</Routes>

    </div>
  )
}

export default App