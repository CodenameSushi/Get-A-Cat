import styled from "styled-components";

export const FilterContainer = styled.aside`
    font-weight: bold;
    color: #00303F;

    position: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    margin: 230px 12px 0 0;
    padding: 12px;
    min-height: 200px;
    
    border-radius: 0 10px 10px 0;
    text-align: center;
    background-color: #E8AA42;

    div{
        display: flex;
        justify-content: space-between;
        width: 170px;
    }

    label{
        justify-self: flex-start;
    }




    .filter-input {
        width: 80px;
        border-radius: 3px;
        border: none;
        background-color: #1A3E3D;
        color: white;
        text-align: center;
    }
    .select-breed {
        width: 80px;
        border-radius: 3px;
        border: none;
        background-color: #1A3E3D;
        color: white;
    }
    .select-gender{
        width: 80px;
        border-radius: 3px;
        border: none;
        background-color: #1A3E3D;
        color: white;
    }
`