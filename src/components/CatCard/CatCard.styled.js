import styled from "styled-components";

export const CatCardContainer = styled.article`
    background-color: #06343B;
    border: 4px solid #06343B;
    border-radius: 8px;
    margin: 8px 0;
    margin-right: 8px;
    color: #E8AA42;
    box-shadow:  5px 5px 20px #4d5753,
             -5px -5px 20px #ffffff;
    

    overflow: hidden;
    position: relative;
    opacity: 0.9;
    :hover
{
        opacity:1;
}


    > div {
        padding: 8px;
    }

    span{
        color: #C1D9D0;
    }

 

  

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-age-and-action{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
        
        button{
            padding: 6px;
            border-radius: 8px;
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
    }


    img{
        width: 250px;
        height: auto;
    }

    .cart-card-delete {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #FF5C5C;
        color: white;
        border-radius: 5px;
        margin-top: 4px;
        margin-right: 4px;
        :hover{
            cursor: pointer;
            filter: brightness(.95);
        }
        :active{
            filter: brightness(.85)
        }
    }
`