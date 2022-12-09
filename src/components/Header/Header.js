import React from "react";
import { HeaderContainer } from "./Header.styled";
import CartIcon from '../../assets/cart.png'
import Logo from '../../assets/cat-logo.png'
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { goToCatsScreen, goToAboutPage} from "../../routes/coordinator";

const Header = () => {
  const context = useContext(GlobalContext)
  const navigate = useNavigate()


  const {
    filterText,
    onChangeFilterText,
    cart,
    toggle
  } = context

  return (
    <HeaderContainer>
      <input
      placeholder="Search"
      value={filterText}
      onChange={onChangeFilterText}
      />
      <a className="link-home" href="#" onClick={() => goToCatsScreen(navigate)}>
        <p>Home</p>
      </a>

      <div className="logo-container" onClick={() => goToCatsScreen(navigate)}><a href="#"><img className="logo-image" src={Logo} alt="logo"/></a></div>

      <a className="link-about" href="#" onClick={() => goToAboutPage(navigate)}>
        <p>About</p>
      </a>
      


      <div className="cart-container">
        <button className="cart-button" onClick={() => toggle()}>
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
