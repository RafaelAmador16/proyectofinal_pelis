import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
    <div>Error 404</div>
    <Link to="/">Volver a Home</Link>
    </>
  )
}

export default Error