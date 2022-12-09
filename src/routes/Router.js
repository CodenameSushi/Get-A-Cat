import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import NotfoundPage from "../screens/NotfoundPage/NotfoundPage";
import CartScreen from "../screens/Cart/CartScreen";
import CatsScreen from "../screens/Cats/CatsScreen";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<CatsScreen/>}/>
        <Route path="*" element={<NotfoundPage/>}/>
        <Route path="/cart" element={<CartScreen/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Router