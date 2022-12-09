import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Homepage from "../screens/Homepage/Homepage";
import NotfoundPage from "../screens/NotfoundPage/NotfoundPage";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="*" element={<NotfoundPage/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}

export default Router