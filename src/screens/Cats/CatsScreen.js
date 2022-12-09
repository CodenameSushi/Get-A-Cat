import React from "react";
import { useContext } from "react";
import cats from "../../assets/cats.json";
import CatCard from "../../components/CatCard/CatCard";
import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Main } from "./CatsScreen.styled";

const CatsScreen = () => {

    const context = useContext(GlobalContext)
  const {
    filterText,
    maxAge,
    minAge,
    genderFilter,
    orderFilter,
  } = context;


  return (
    <>
      <Header />
      <Filter/>
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
              isOnCatsScreen={true}/>
            ))}
        </section>
      </Main>
    </>
  );
};

export default CatsScreen;
