import React from 'react'
import { Btn } from '../../utils/button/Btn';
import { SidebarContainer } from './Sidebar.elements'
import componentsName from '../../../sidebar.json';

const Sidebar = () => {
    return (
        <>
        <SidebarContainer>
          {
         componentsName.map(component => {
          return <Btn key={component.name} btnName={component.name} />
          })    
          }
        </SidebarContainer>
        </>
    )
}

export default Sidebar
