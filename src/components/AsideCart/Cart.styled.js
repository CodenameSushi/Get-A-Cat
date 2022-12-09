import styled from "styled-components";

export const CartContainer = styled.aside`
display: flex;
flex-direction: column;

 width: 18vw;
 border: 2px solid black;
 position: fixed;
 right: 0;

 margin-top: 32px;
 border-radius: 8px 0 0 8px;
 background-color: #E8AA42;
 overflow: hidden;

 h2 {
    font-weight: bold;
 }




`

export const CartCard = styled.article`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #06343B;
color: #C1D9D0;
padding: 8px;

.img-header{
    display: flex;
    flex-direction: column;
    text-align: center;

    h2{
        color: #E8AA42;
    }

    img{
        height: 50px;
        border-radius: 4px;
    }
}

.info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.cart-buttons {
    width: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;


}

.cart-delete {
    background-color: #D11A2A;
}

button{
            padding: 4px;
            border-radius: 4px;
            border: none;
            background-color: #E8AA42;
            font-weight: bold;
            color: Black;

            :hover {
                cursor: pointer;
                filter: brightness(.9)
            }
            :active{
                filter: brightness(.8)
            }
        }


hr{
    width: 90%;
}

`