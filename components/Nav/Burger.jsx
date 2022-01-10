import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";



const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    
    z-index: 20;
    display: none;

    @media (max-width: 768px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;  //separa as divs "icone menu"

    }

    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open }) => open ? '#ccc' : '#333'}; //este open realiza a troca de cor do icone Menu quando clicado
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear; //efeito para abrir e fechar o menu




        &:nth-child(1){
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)' }; //animação no primeiro elemento da div "----" para abrir
        }
        &:nth-child(2){
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)' }; //animação no segundo elemento da div "----" para abrir
            opacity: ${({open}) => open ? 0 : 1 }
        }
        &:nth-child(3){
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)' }; //animação no terceiro elemento da div "----" para abrir
        }
    }
`
const Burger = () =>{

    // animação abrir e fechar menu
    const [open, setOpen] = useState(false)

    return(
        <>
            <StyledBurger open={open} onClick={() => setOpen (!open)}>
                <div />   
                <div />   
                <div />   
            </StyledBurger>
            <RightNav open={open} />
        </>
    )
}
export default Burger