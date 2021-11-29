import React from 'react'
import {ConfigBtnWrapper , ConfigImage} from './ConfigBtn.elements';
import Add from '../../../assets/Add.png';

export const ConfigBtn = () => {
    return (
        <ConfigBtnWrapper>
            <ConfigImage src={Add} alt='add Img'/>
            <span>Add New Config</span>
        </ConfigBtnWrapper>
    )
}
