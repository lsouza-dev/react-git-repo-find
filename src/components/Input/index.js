import React from 'react'
import {InputContainer} from './styles'

const Input = ({value,onChange}) => {
  return (
    <InputContainer>
        <input 
        value={value}
        onChange={onChange}
        placeholder='Digite o nome do repositório' />
    </InputContainer>
  )
}

export default Input