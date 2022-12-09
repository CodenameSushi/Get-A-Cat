import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import NotfoundPage from "../screens/NotfoundPage/NotfoundPage";
import CatsScreen from "../screens/Cats/CatsScreen";
import AboutPage from "../screens/AboutPage/AboutPage";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<CatsScreen/>}/>
        <Route path="*" element={<NotfoundPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Router