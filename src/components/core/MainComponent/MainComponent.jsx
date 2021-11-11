import React from 'react'
import FormComponent from '../FormComponent/FormComponent'
import Sidebar from '../Sidebar/Sidebar'
import SidebarTwo from '../SidebarTwo/SidebarTwo'
import { MainComponentWrapper } from './MainComponent.elements'

const MainComponent = () => {
    return (
        <MainComponentWrapper>
          <Sidebar />
          <FormComponent />  
          <SidebarTwo />
        </MainComponentWrapper>
    )
}

export default MainComponent
