import React from 'react'

interface Props {
    params: { id: number };
  }
  
const photos = ({params: {id} }: Props) => {
  return (
    <div>photos {id}</div>
  )
}

export default photos