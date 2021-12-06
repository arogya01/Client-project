import React from 'react'
import { Btn } from '../../utils/button/Btn';
import { SidebarContainer } from './Sidebar.elements'
import componentsName from '../../../data/sidebar.json';

const Sidebar = () => {
    return (
        <>
        <SidebarContainer>
          {
         componentsName.map(component => {
          return <Btn key={component.name} btnName={component.name} linkName={component.route} />
          })    
          }
        </SidebarContainer>
        </>
    )
}

export default Sidebar
