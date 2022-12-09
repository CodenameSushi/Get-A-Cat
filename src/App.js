import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import { GlobalStyle } from './GlobalStyled'
import Router from './routes/Router'
import { useEffect, useState } from 'react'

const App = () => {

  
  const [ activeScreen, setActiveScreen ] = useState(1)
  const [ cart, setCart ] = useState([])
  const [ filterText, setFilterText ] = useState("")
  const [ orderFilter, setOrderFilter] = useState("a-z")
  const [ genderFilter, setGenderFilter ] = useState("all")
  const [ maxAge, setMaxAge ] = useState(Infinity)
  const [ minAge, setMinAge ] = useState(-Infinity)

  const goToCatsScreen = () => setActiveScreen("CatsScreen")

  const goToCartScreen = () => setActiveScreen("CartScreen")

  const addToCart = (catToAdd) => {
    const newCart = [...cart]
    const catFound = newCart.find(
      (catInCart) => catInCart.id === catToAdd.id
    )

    if(!catFound){
      const newCat = {...catToAdd, quantity: 1 }
      newCart.push(newCat)
    }else{
      catFound.quantity++
    }
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const increaseQuantityInCart = (catToIncrease) => {
    const newCart = [...cart]

    const catFound = newCart.find(
      (catInCart) => catInCart.id === catToIncrease.id
    )
    catFound.quantity++
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  
    
  }

  const decreaseQuantityInCart = (catToIncrease) => {
    const newCart = [...cart]

    const catFound = newCart.find(
      (catInCart) => catInCart.id === catToIncrease.id
    )
    catFound.quantity--
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const deleteFromCart = (catToDelete) => {
    const newCart = [...cart]

    const indexFound = newCart.findIndex(
      (catInCart) => catInCart.id === catToDelete.id
    )

    newCart.splice(indexFound, 1)
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const onChangeFilterText = (e) => {
    setFilterText(e.target.value)
  }

  const reloadCart = () => {
      if (localStorage.getItem("cart")) {
          const newCart = localStorage.getItem("cart")
          setCart(JSON.parse(newCart))
      }
      
  }

  const switchScreenToCats = () => {
    setActiveScreen(1)
  }

  const switchScreenToCart = () => {
    setActiveScreen(2)
  }

  console.log(cart)

  useEffect(() => {
      reloadCart()
  }, [])
  
  const context = {
    activeScreen,
    setActiveScreen,
    addToCart,
    filterText,
    setFilterText,
    onChangeFilterText,
    maxAge,
    setMaxAge,
    minAge,
    setMinAge,
    genderFilter,
    setGenderFilter,
    orderFilter,
    setOrderFilter,
    cart,
    setCart,
    increaseQuantityInCart,
    decreaseQuantityInCart,
    deleteFromCart,
    goToCartScreen,
    goToCatsScreen,
    reloadCart,
    switchScreenToCats,
    switchScreenToCart
  }


  return (

    <GlobalContext.Provider value={context}>
    <ChakraProvider>
    <GlobalStyle/>
    <Router />
    </ChakraProvider>    
    </GlobalContext.Provider>

  )
}

export default App