import React from 'react'
import { Main } from './CartScreen.styled'
import CatCard from '../../components/CatCard/CatCard'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import Header from '../../components/Header/Header'

const CartScreen = () => {

  const context = useContext(GlobalContext)

    const {
        cart
    }= context




  return (
    <>
    <Header/>
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
                 />
        ))
        }
    </section>
</Main>
</>
  )
}

export default CartScreen