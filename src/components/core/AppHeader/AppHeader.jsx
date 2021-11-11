import React from 'react'
import {HeaderOne, NavContainer,  NavLogoContainer , NavbarImage } from './AppHeader.Elements';
import NavImg from '../../../assets/Logo.png';

const AppHeader = () => {
    return (
        <div>
            <NavContainer> 
                <NavLogoContainer>
                <NavbarImage src={NavImg} alt="logo"/>
                <HeaderOne>Logo</HeaderOne>
                </NavLogoContainer>
            </NavContainer>
        </div>
    )
}

export default AppHeader
