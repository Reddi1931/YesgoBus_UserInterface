import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contactus from './Components/Contactus'
import Offers from './Components/Offers'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Signup from './Components/Signup'
import TermsAndConditions from './Components/Termsandconditions'
import PrivacyPolicy from './Components/PrivacyPolicy'
import BusList from './Components/BusList'

function App() {
    return (
        <>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home></Home>}/>
                <Route path='/contactus' element={<Contactus/>}/>
                <Route path='/offers' element={<Offers/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/termsandconditions' element={<TermsAndConditions/>}/>
                <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
                <Route path='/buslist' element={<BusList />} />
            </Routes>
            <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App