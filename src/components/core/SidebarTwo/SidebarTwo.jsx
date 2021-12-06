import React from 'react'
import componentsName from '../../../data/sidebarTwo.json';
import { SidebarContainerWrapper } from './SidebarTwo.elements';
import { Btn } from '../../utils/button/Btn';
import CTA from '../../utils/CTA/CTA';

const SidebarTwo = () => {
    return (
        <SidebarContainerWrapper>
             {
         componentsName.map(component => {
          return <Btn key={component.name} btnName={component.name} linkName={component.route}/>
          })    
          }
        <CTA />
        </SidebarContainerWrapper>
    )
}

export default SidebarTwo
