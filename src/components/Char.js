import React from 'react'

export default function Char(props) {
  return (
    <div onClick={props.deleteHandler} className='letter'>{props.character}</div>
  )
}
