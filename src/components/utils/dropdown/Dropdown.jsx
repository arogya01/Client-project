import React from 'react'
import { SelectBox,InputLabel } from '../../../global.elements';
import {DropdownContainer} from './Dropdown.elements'

const Dropdown = (options,value) => {
    return (
    <DropdownContainer>
        <InputLabel>Group Service</InputLabel>
        <SelectBox option={options} value={value}>

        </SelectBox>
    </DropdownContainer>
        )
}

export default Dropdown
