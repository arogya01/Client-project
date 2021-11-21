import React from 'react'
import componentsName from '../../../sidebarTwo.json';
import { SidebarContainerWrapper } from './SidebarTwo.elements';
import { Btn } from '../../utils/button/Btn';
import CTA from '../../utils/CTA/CTA';

const SidebarTwo = () => {
    return (
        <SidebarContainerWrapper>
             {
         componentsName.map(component => {
          return <Btn key={component.name} btnName={component.name} />
          })    
          }
        <CTA />
        </SidebarContainerWrapper>
    )
}

export default SidebarTwo
