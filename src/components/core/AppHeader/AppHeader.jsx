import React from 'react'
import {HeaderOne, NavContainer,  NavLogoContainer , NavbarImage } from './AppHeader.Elements';
import NavImg from '../../../assets/Logo.png';

const AppHeader = ({headerName}) => {
    return (
        <div>
            <NavContainer> 
                <NavLogoContainer>
                <NavbarImage src={NavImg} alt="logo"/>
                <HeaderOne>{headerName}</HeaderOne>
                </NavLogoContainer>
            </NavContainer>
        </div>
    )
}

export default AppHeader
