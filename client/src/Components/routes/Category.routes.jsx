import React from 'react'
import { Outlet } from 'react-router-dom'

function Category() {
  return (
    <section className='border border-black/20 font-bold tracking-wide rounded-lg min-h-96  p-8'>
      <Outlet />
    </section>
  )
}

export default Category
