import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 8vh;
    background-color: #E8AA42;
    padding: 12px;
    border-radius: 0 0 10px 10px;

    a {
        text-decoration: none;
        color: #00303F;
        font-weight: bold;
        font-size: 20px;
        :hover{
            cursor: pointer;
        }
    }

    input{
        border-radius: 3px;
        border: none;
        height: 24px;
        background-color: #1A3E3D;
        color: white;
    }

    p {
        width: 60px;
    }



    .logo-container{

        margin-top: 66px;
    }

    .logo-image{
        height: 250px;
        width: 250px;
    }

    .cart-container {
        width: 169px;
    }

    .cart-button {
        border: none;
        background-color: transparent;
        position: relative;

        :hover{
            cursor: pointer;
        }
    }

    .cart-image {
        width:50px;
        height: 50px;
    }

    .cart-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 1px;
        right: 1px;
        margin-left:4px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #00303F;
        font-weight: bold;
        color: white;

    }



`
