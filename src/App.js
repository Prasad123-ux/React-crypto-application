import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Coins from './Components/Coins'
import Home from './Components/Home'
import Exchange from './Components/Exchange'
import CoinsDetail from './Components/CoinsDetail'
import Heading from './Components/Heading'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div>
      <Router>
      <Heading/>
      {/* <Home/> */}
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/coins" element={<Coins/>}/>
          <Route path="/exchange" element={<Exchange/>}/>
          <Route path="/coin/:id" element={<CoinsDetail/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  )
}
