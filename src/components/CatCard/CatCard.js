import React from 'react'
import { CatCardContainer } from './CatCard.styled'

const CatCard = (props) => {

const {
    cat,
    addToCart,
    isOnCartScreen,
    isOnCatsScreen,
    decreaseQuantityInCart,
    increaseQuantityInCart,
    deleteFromCart
} = props



  return (

    <CatCardContainer>

    <img src={cat.imageUrl} alt={cat.imageAlt}/>

    <div>
        <div className='card-header'>
            <h2>{cat.breed}</h2>
            <span>{cat.gender}</span>
        </div>

        <div className='card-age-and-action'>

            <span>Age: {cat.age}</span>

            {isOnCartScreen && cat.quantity > 1 && (
                <button onClick={() => decreaseQuantityInCart(cat)}>-</button>
            )}

            {isOnCatsScreen && (
                <button onClick={() => addToCart(cat)}>Adopt Cat!</button>
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