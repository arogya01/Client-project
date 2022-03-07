import React from 'react'
import { InputContainer } from './Checker.Elements'

export const Checker = ({checked,onChange}) => {
  
  return (
    <>
    {
    checked ? (
    <InputContainer checked onChange={onChange}/>

    ) : (
      <InputContainer onChange={onChange}/>
    )
}
    </>
  )
}
