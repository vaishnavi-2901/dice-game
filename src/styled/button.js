import styled from "styled-components"

export const Button = styled.button `
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    
    min-width: 20px;
    border: none;
    height: 44px;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;
    &:hover{
        background-color: #d8d1d1;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }

    border-radius: 5px;
`



export const OutlineButton = styled(Button)`
    background-color: white;
    border-color: black;
    color: black;
    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
    }
`