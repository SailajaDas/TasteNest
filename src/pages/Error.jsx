import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error=useRouteError();
  console.log(Error)
  return (
    <div>
      <h1>404 error page</h1>
    </div>
  )
}

export default Error