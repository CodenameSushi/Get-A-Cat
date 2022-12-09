import React from 'react'
import { Main } from './CartScreen.styled'
import CatCard from '../../components/CatCard/CatCard'
import Header from '../../components/Header/Header'

const CartScreen = (props) => {

    const {
        cart,
        increaseQuantityInCart, 
        decreaseQuantityInCart,
        deleteFromCart
    }= props




  return (
    <>
    <Main>
    <section>
        <h1>Cats to take home</h1>
        <hr/>
        {
            cart.map((cat) => (
                <CatCard 
                cat={cat} 
                key={cat.id}
                isOnCartScreen={true}
                increaseQuantityInCart={increaseQuantityInCart}
                decreaseQuantityInCart={decreaseQuantityInCart}
                deleteFromCart={deleteFromCart}
                 />
        ))
        }
    </section>
</Main>
</>
  )
}

export default CartScreen