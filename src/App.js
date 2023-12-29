import React from 'react'
import "./App.css"
import Header from './Navbar/Header'
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import ListYourProperty from './Components/Pages/ListYourProperty'
import LuxuryGetaWays from './Components/Pages/LuxuryGetaWays'
import Explore from './Components/Pages/Explore'
import Login from './Components/Pages/Login'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import CarouselPage from './Carousel/CarouselPage'
import DestinationPic from './Destination/DestinationPic'
import SearchBox from './Searchbox/SearchBox'
import SimpleSlider from './Components/Slider/SimpleSlider'
import ChooseCollection from './ChooseCollection/ChooseCollection'








const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <CarouselPage/>
    <SearchBox/>
    <DestinationPic/>
    <SimpleSlider/>
    <ChooseCollection/>
    <Home/>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/home" element={<Home/>}>
      </Route>
      <Route path="Explore" element={<Explore/>}>
      </Route>
      <Route path="/LuxuryGetWays" element={<LuxuryGetaWays/>}>
      </Route>
      <Route path="/ListYourProperty" element={<ListYourProperty/>}>
      </Route>
      <Route path="/Contact" element={<Contact/>}>
      </Route>
      <Route path="/Login" element={<Login/>}>
     </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App