import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import NotfoundPage from "../screens/NotfoundPage/NotfoundPage";
import CatsScreen from "../screens/Cats/CatsScreen";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<CatsScreen/>}/>
        <Route path="*" element={<NotfoundPage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Router