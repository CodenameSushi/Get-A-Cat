import Header from "../../components/Header/Header";
import CartScreen from "../Cart/CartScreen";
import CatsScreen from "../Cats/CatsScreen";
import { useState } from "react";
import { useEffect } from "react";


function Homepage() {

    const [ activeScreen, setActiveScreen ] = useState("CatsScreen")
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

    console.log(cart)

    useEffect(() => {
        reloadCart()
    }, [])

    const renderScreen = () => {
      switch (activeScreen) {
        case "CatsScreen":
          return <CatsScreen
          addToCart={addToCart}
          filterText={filterText}
          maxAge={maxAge}
          setMaxAge={setMaxAge}
          minAge={minAge}
          setMinAge={setMinAge}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          orderFilter={orderFilter}
          setOrderFilter={setOrderFilter}/>
        case "CartScreen":
          return <CartScreen
          cart={cart}
          increaseQuantityInCart={increaseQuantityInCart}
          decreaseQuantityInCart={decreaseQuantityInCart}
          deleteFromCart={deleteFromCart}
          />
          default:
            return <div>Tela nao existe</div>
      }
    };





  return (
    <>
    <Header
    goToCatsScreen={goToCatsScreen}
    goToCartScreen={goToCartScreen}
    cart={cart}
    filterText={filterText}
    onChangeFilterText={onChangeFilterText}
    />
    {renderScreen()}
    </>
  );
}

export default Homepage;
