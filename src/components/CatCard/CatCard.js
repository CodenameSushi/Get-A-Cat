import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { CatCardContainer } from './CatCard.styled'

const CatCard = (props) => {

    const context = useContext(GlobalContext)

    const {cat, isOnCartScreen, isOnCatsScreen} = props

const {
    addToCart,
    decreaseQuantityInCart,
    increaseQuantityInCart,
    deleteFromCart
} = context



  return (

    <CatCardContainer>

    <img src={cat.imageUrl} alt={cat.imageAlt}/>

    <div>
        <div className='card-header'>
            <h2>{cat.breed}</h2>
            <span>{cat.gender}</span>
        </div>

        <div className='card-age-and-action'>

            <span>Age: {cat.age} years</span>

            {isOnCartScreen && cat.quantity > 1 && (
                <button onClick={() => decreaseQuantityInCart(cat)}>-</button>
            )}

            {isOnCatsScreen && (
                <button onClick={() => addToCart(cat)}>ADOPT</button>
            )}

            {isOnCartScreen && <span>x{cat.quantity}</span>}

            {isOnCartScreen && (
                <button onClick={() => increaseQuantityInCart(cat)}>+</button>
            )}

            {isOnCartScreen
            && <button 
            className="cart-card-delete"
            onClick={() => deleteFromCart(cat)}
            >
            x
            </button>
             }

            

        </div>




    </div>





    </CatCardContainer>



  )
}

export default CatCard


