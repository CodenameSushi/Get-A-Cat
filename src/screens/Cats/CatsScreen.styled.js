import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    


    section{

        display: flex;
        flex-wrap: wrap;
        width: 60vw;
        gap: 20px;

        h1, hr {
            width: 100vw;
        }

        h1 {
            margin-top: 80px;
            font-size: 72px;
            text-align: center;
            /* background-image: url("https://media.giphy.com/media/hRnLeHfJ64EXS/giphy.gif");
            background-size: cover;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; */
            height: 150px;
            color: #06343B;
            font-weight: medium;
            
        }

        hr {
            margin-top: 16px;
            margin-bottom: 16px;
            height: 1px;
        }
    }

`