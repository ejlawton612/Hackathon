import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Listing from './routes/Listing';
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Matching from './routes/Matching';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Listing />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/matching' element={<Matching />} />
      </Routes>
    </>
  );
}

export default App;