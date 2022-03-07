import React from 'react'
import {ConfigBtnLink, ConfigBtnWrapper , ConfigImage} from './ConfigBtn.elements';
import Add from '../../../assets/Add.png';

export const ConfigBtn = () => {
    return (
        <ConfigBtnLink to='/newconfig'>
        <ConfigBtnWrapper>
            <ConfigImage src={Add} alt='add Img'/>
            <span>Add New Config</span>
        </ConfigBtnWrapper>
        </ConfigBtnLink>
    )
}
