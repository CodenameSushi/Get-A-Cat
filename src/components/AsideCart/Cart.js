import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CartContainer } from "./Cart.styled";
import { CartCard } from "./Cart.styled";
import { ScaleFade, Button, ButtonGroup } from '@chakra-ui/react'


const Cart = () => {
  const context = useContext(GlobalContext);

  const {
    decreaseQuantityInCart,
    increaseQuantityInCart,
    deleteFromCart,
    cart,
    toggleCart,
  } = context;

  return (
    <ScaleFade initialScale={0.7} in={toggleCart}>
    <CartContainer>
      <h2>Adopting Cats </h2>

      {cart.map((cat) => (
        <>
        <hr />
          <CartCard>
            {" "}
            <div className="img-header">
              <h2>{cat.breed}</h2>
              <img src={cat.imageUrl} alt={cat.imageAlt} />
            </div>
            <div className="info">
              <span>{cat.gender}</span>
              <span>Age: {cat.age} years</span>
            </div>
            <div className="cart-buttons">
                <button onClick={() => decreaseQuantityInCart(cat)}>-</button>
              

              <span>x{cat.quantity}</span>

              <button onClick={() => increaseQuantityInCart(cat)}>+</button>
            </div>
            <button className="cart-delete" onClick={() => deleteFromCart(cat)}>
              x
            </button>
          </CartCard>
          
        </>
      ))}
      <Button colorScheme='teal' variant='outline' color={'#06343B'}>
    Confirm Selection
  </Button>
    </CartContainer>
    </ScaleFade>
  );
};

export default Cart;
