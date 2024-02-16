import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Home from './pages/Home';
import React from 'react'
import Header from './components/Header';

const App = () => {
   // Example state, seems not to be used currently but might be part of your app logic
   const [count, setCount] = useState(0);

   return (
     <>
       <BrowserRouter>
        <Header/>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/Sign-In' element={<SignIn />} />
           <Route path='/Sign-Up' element={<SignUp />} />
           <Route path='/Profile' element={<Profile />} />
           <Route path='/About' element={<About />} />
         </Routes>
       </BrowserRouter>
     </>
   );
}

export default App
