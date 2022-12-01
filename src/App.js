import Header from "./components/Header/Header";
import CatsScreen from "./screens/Cats/CatsScreen";
import CartScreen from "./screens/Cart/CartScreen";
import { useState } from "react";


function App() {

    const [activeScreen, setActiveScreen] = useState("CatsScreen")

    const [cart, setCart] = useState([])

    const [ filterText, setFilterText ] = useState("")

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
    }

    const increaseQuantityInCart = (catToIncrease) => {
      const newCart = [...cart]

      const catFound = newCart.find(
        (catInCart) => catInCart.id === catToIncrease.id
      )
      catFound.quantity++
      setCart(newCart)
    }

    const decreaseQuantityInCart = (catToIncrease) => {
      const newCart = [...cart]

      const catFound = newCart.find(
        (catInCart) => catInCart.id === catToIncrease.id
      )
      catFound.quantity--
      setCart(newCart)
    }

    const deleteFromCart = (catToDelete) => {
      const newCart = [...cart]

      const indexFound = newCart.findIndex(
        (catInCart) => catInCart.id === catToDelete.id
      )

      newCart.splice(indexFound, 1)
      setCart(newCart)
    }

    const onChangeFilterText = (e) => {
      setFilterText(e.target.value)
    }

    const renderScreen = () => {
      switch (activeScreen) {
        case "CatsScreen":
          return <CatsScreen
          addToCart={addToCart}
          filterText={filterText}/>
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
    itemsInCart={cart.lenght}
    filterText={filterText}
    onChangeFilterText={onChangeFilterText}
    />
    {renderScreen()}
    </>
  );
}

export default App;
