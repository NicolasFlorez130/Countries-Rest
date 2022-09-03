import React, { useRef, useState } from 'react';
import tw from 'twin.macro';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/home/Home';
import CountriesState from './contexts/countries/CountriesState';
import Country from './pages/country/Country';

const StylesWrapper = tw.div`
   font-nunito text-skin-base
   bg-skin-base
   min-h-screen
`;
function App() {
   const wrapper = useRef();

   return (
      <StylesWrapper ref={wrapper}>
         <CountriesState>
            <Nav wrapper={wrapper} />
            <Router>
               <Routes>
                  <Route path="/" element={<Home />} />
               </Routes>
               <Routes>
                  <Route path="/country/:id" element={<Country />} />
               </Routes>
            </Router>
         </CountriesState>
      </StylesWrapper>
   );
}

export default App;
