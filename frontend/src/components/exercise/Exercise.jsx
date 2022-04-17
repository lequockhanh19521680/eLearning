import React from 'react'
import { useLocation } from 'react-router-dom'

const Exercise = (props) => {
    const {pathname} = useLocation()
    console.log(pathname)
  return (
    <div> Exercise </div>
  )
}

export default Exercise