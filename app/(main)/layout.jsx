"use client"

import { Authenticated } from 'convex/react'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    // children will be rendered only when user is Authenticated.
    <Authenticated>       
      <div className="container mx-auto mt-24 mb-20 px-4">{children}</div>
    </Authenticated>
  )
}

export default MainLayout
