import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='navbar space-x-5 mt-3'>
        <Link href='/' className='ml-3'>Task Manager</Link>
    </div>
    </>
  )
}

export default Navbar