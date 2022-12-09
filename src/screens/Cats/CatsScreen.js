import React from "react";
import cats from "../../assets/cats.json";
import CatCard from "../../components/CatCard/CatCard";
import Filter from "../../components/Filter/Filter";
import { Main } from "./CatsScreen.styled";

const CatsScreen = (props) => {
  const {
    addToCart,
    filterText,
    maxAge,
    setMaxAge,
    minAge,
    setMinAge,
    genderFilter,
    setGenderFilter,
    orderFilter,
    setOrderFilter,
  } = props;


  return (
    <>
      <Filter
        maxAge={maxAge}
        setMaxAge={setMaxAge}
        minAge={minAge}
        setMinAge={setMinAge}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        orderFilter={orderFilter}
        setOrderFilter={setOrderFilter}
      />
      <Main>
        <section>
          <h1>Available Cats for Adoption</h1>
          <hr />
          {cats
            .filter((cat) =>
              cat.breed.toLowerCase().includes(filterText.toLowerCase())
            )
            .filter((cat) => {
              if (cat.gender.toLowerCase() === genderFilter.toLowerCase() && genderFilter !== "All"){
                return cat
            }else if (genderFilter === "all" && cat.gender.toLowerCase() !== genderFilter.toLowerCase()){
                return cat
            }
              })
            
            .filter((cat) => cat.age >= minAge)
            .filter((cat) => cat.age <= maxAge)
            .sort(() => {
              if (orderFilter === "a-z") {
                return -1;
              } else {
               return 0;
              }
            })
            .map((cat) => (
              <CatCard
                cat={cat}
                key={cat.id}
                addToCart={addToCart}
                isOnCatsScreen={true}
              />
            ))}
        </section>
      </Main>
    </>
  );
};

export default CatsScreen;
