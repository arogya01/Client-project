import React from 'react'
import FormComponent from '../FormComponent/FormComponent'
import Sidebar from '../Sidebar/Sidebar'
import SidebarTwo from '../SidebarTwo/SidebarTwo'
import { MainComponentWrapper } from './MainComponent.elements'
import AppHeader from '../AppHeader/AppHeader'

const MainComponent = () => {
    return (
      <>
      <AppHeader  headerName="logo"/>
        <MainComponentWrapper>
          <Sidebar />
          <FormComponent />  
          <SidebarTwo />
        </MainComponentWrapper>
    </>
    )
}

export default MainComponent
