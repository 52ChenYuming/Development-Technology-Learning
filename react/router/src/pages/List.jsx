import React from 'react'
import { useParams } from 'react-router';


export default function List() {
  const params = useParams()
  console.log(params);
  return (
    <h2>List-Page - {params.id}</h2>
  )
}

