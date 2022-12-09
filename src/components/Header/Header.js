import React from "react";
import { HeaderContainer } from "./Header.styled";
import CartIcon from '../../assets/cart.png'
import Logo from '../../assets/cat-logo.png'

const Header = (props) => {


  const {
    goToCartScreen,
    goToCatsScreen,
    filterText,
    onChangeFilterText,
    cart
  } = props

  return (
    <HeaderContainer>
      <input
      placeholder="Search"
      value={filterText}
      onChange={onChangeFilterText}
      />
      <a className="link-home" href="#" onClick={goToCatsScreen}>
        <p>Home</p>
      </a>

      <div className="logo-container"><a href="#"><img className="logo-image" src={Logo} alt="logo"/></a></div>

      <a className="link-about" href="#">
        <p>About</p>
      </a>
      


      <div className="cart-container">
        <button className="cart-button" onClick={goToCartScreen}>
          <img className="cart-image" src={CartIcon} alt="cart icon"/>
          {
            cart.length > 0
             && 
            <span className="cart-badge">{cart.length}</span>
          }
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
