import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Footer from './Footer'
import Header from './Header'
import Mens from './Mens';
import Womens from './Womens'; // ✅ CORRECT
import Productdetails from './Productdetails';
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mens' element={<Mens />} />
          <Route path='/womens' element={<Womens />} />
          <Route path='/product/:id' element={<Productdetails />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App