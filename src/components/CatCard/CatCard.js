import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { CatCardContainer } from './CatCard.styled'

const CatCard = (props) => {

    const context = useContext(GlobalContext)

    const {cat} = props

const {
    addToCart,
    reloadCart,
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


                <button onClick={() => addToCart(cat)}>ADOPT</button>


            

        </div>




    </div>





    </CatCardContainer>




  )
}

export default CatCard


