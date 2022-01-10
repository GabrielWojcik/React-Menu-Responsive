import React from "react";
import styled from "styled-components";

const Ul = styled.ul`

    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
     }


     @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: blue;
        position: fixed;
        transform: ${({open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        rigth: 0;
        height: 100vh;
        width: 300px;  //largura do menu mobile
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li{
            color: #fff;
        }


     }



`;



const RightNav =  ({ open }) =>{
        return (
            
        <Ul open={open} >
            <li>Inicio</li>
            <li>Sobre</li>
            <li>Terrenos</li>
            <li>Contato</li>
        </Ul>



        )
}


export default RightNav