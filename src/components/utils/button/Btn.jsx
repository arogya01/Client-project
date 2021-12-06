import React from 'react'
import {LinkButton,BtnLink} from './Btn.elements';

export const Btn = ({btnName,linkName}) => {
    const path=`/${linkName}`

    return (
        <BtnLink to={path}>
        <LinkButton >
        {btnName}
        </LinkButton>
        </BtnLink>
    )
}
