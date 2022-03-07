import React from 'react'
import {LinkButton,BtnLink} from './Btn.elements';

export const Btn = ({btnName,linkName,onBtnClick}) => {
    const path=`/${linkName}`

    return (
      linkName ? (
        <BtnLink to={path}>
        <LinkButton onClick={onBtnClick}>
        {btnName}
        </LinkButton>
        </BtnLink>
      ): (
        <LinkButton  onClick={onBtnClick}>
        {btnName}
        </LinkButton>
      )   
    )
}
