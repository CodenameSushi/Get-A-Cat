import React from 'react'
import cats from "../../assets/cats.json"
import CatCard from '../../components/CatCard/CatCard'
import { Main } from './CatsScreen.styled'

const CatsScreen = (props) => {

    const { addToCart, filterText } = props

    const filterCatsByText = () => {
        return cats.filter((cat) => 
            cat.breed.toLowerCase().includes(filterText.toLowerCase())
        )
    }



  return (

    <Main>
        <section>
            <h1>Available Cats</h1>
            <hr/>
            {
                filterCatsByText()
                .map((cat)=> (
                <CatCard
                cat={cat}
                key={cat.id}
                addToCart={addToCart}
                isOnCatsScreen={true}
                />
            ))}
        </section>
     </Main>
  )
}

export default CatsScreen