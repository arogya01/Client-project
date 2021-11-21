import React from 'react'
import {LinkButton,BtnLink} from './Btn.elements';

export const Btn = ({btnName,LinkName}) => {
    const path=`/${LinkName}`

    return (
         <BtnLink to={path}>
         <LinkButton >
         {btnName}
         </LinkButton>
         </BtnLink>
    )
}
