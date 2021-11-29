import React from 'react'
import AppHeader from '../components/core/AppHeader/AppHeader'
import { ConfigBtn } from '../components/utils/configButton/ConfigBtn'
import Dropdown from '../components/utils/dropdown/Dropdown'
import {FilterWrapper} from '../global.elements'
import configData from '../data/config.json';
import Table from '../components/core/Table/Table'

const Config = () => {
    return (
        <>
        <AppHeader headerName="Configuration" /> 
        <FilterWrapper>
        {
            configData[0].services.map(service => {
                return <Dropdown serviceName={service.serviceName} key={service.serviceName} options={service.options} />
            })
        }
        </FilterWrapper>
        <ConfigBtn />
        <Table />
        {/* <DataTable /> */}
        </>
    )
}

export default Config
