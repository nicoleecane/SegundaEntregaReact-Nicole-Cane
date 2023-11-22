import React from 'react'
import { ButtonUse } from '../Button/ButtonUse'

export const Card = ( {title, message}) => {
  return (
    <div className="container mt-5 d-flex flex-column p-4">
    <div className='card w-5 p-4'>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{message}</p>
      </div>
      <ButtonUse text={"detalles"}  />
    </div>
    </div>
  )
}
