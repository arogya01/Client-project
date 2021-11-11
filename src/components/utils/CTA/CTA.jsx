import React from 'react';
import { SectionWrapper,SectionDetails, InputDetails} from './CTA.elements';
import {Btn} from '../button/Btn';

const CTA = () => {
    return (
        <SectionWrapper>
        <SectionDetails>
        Subsribe to get futher updates on new features
        </SectionDetails>
        <InputDetails placeholder='enter your email' type='text'/>
        <Btn btnName='Submit'/>
        </SectionWrapper>
    )
}

export default CTA
