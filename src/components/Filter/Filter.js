import React from "react";
import { FilterContainer } from "./Filter.styled";

const Filter = (props) => {
  const {
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
    <FilterContainer>
      <h1>Filter By:</h1>
      <div>
        <label>Breed :</label>
        <select
          className="filter-input"
          value={orderFilter}
          onChange={(e) => setOrderFilter(e.target.value)}
        >
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>

      <div>
        <label>Gender :</label>
        <select
          className="filter-input"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>

      <div>
        <label>Min. Age :</label>
        <input
          className="filter-input"
          type="number"
          value={minAge}
          onChange={(e) => setMinAge(e.target.value)}
        />
      </div>

      <div>
        <label>Max. Age :</label>
        <input
          className="filter-input"
          type="number"
          value={maxAge}
          onChange={(e) => setMaxAge(e.target.value)}
        />
      </div>
    </FilterContainer>
  );
};

export default Filter;
