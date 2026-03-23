import React from 'react'
import ProjectWebsite from './ProjectWebsite'
import WebsiteHome from './WebsiteHome'
import WebsiteAbout from './WebsiteAbout'
import WebsiteAirospace from './WebsiteAirospace'
import WebsitePublic from './WebsitePublic'
import WebsiteManufacturing from './WebsiteManufacturing'
import Websiteloginpage from './Websiteloginpage'
import WebsiteFooter from './WebsiteFooter'
import Navbar from './Navbar'
import Class1  from './Class1'
import Home from './Home'
import About from './About'
import Loginform from './Loginform'
import ProjectHome from './ProjectHome'
import Googlepage from './Googlepage'

 import Routepage1 from './Routepage1'
 import Routepage2 from './Routepage2'

import { Route, Routes } from 'react-router-dom'
import RouteProduct from './RouteProduct'
function App() {
  return (
    <>
 {/* Navbar */}
  
    <WebsiteHome/>
    <WebsiteAbout/>
    <WebsiteAirospace/>
    <WebsiteManufacturing/>    
    <WebsitePublic/>
    <Websiteloginpage/>
    <WebsiteFooter/>
    <ProjectWebsite/>
    <Navbar/>
    <Class1/>
    <ProjectHome/>
    <Googlepage/>
   <Home/>
    <About/>
<Loginform/>
<Navbar/>
 
 <Routes>
  <Route path='/' element={<Routepage1/>}/>
  <Route path='/About' element={<Routepage2/>}/>

  <Route path='/Product' element={<RouteProduct/>}/>



 </Routes>

    </>
  )
}

export default App