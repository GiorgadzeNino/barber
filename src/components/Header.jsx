import React from 'react'
import { Link } from 'react-router-dom'

import { useStore } from '../store/StoreContext'


const Header = () => {
  const { cart } = useStore()

  console.log('context')
  return (
    <div className='flex items-center justify-between px-10 bg-slate-700 h-14'>
      <Link to='/' className='text-white cursor-pointer'>
        Barber
      </Link>
      <Link to='/auth/signup' className='text-xl text-white cursor-pointer'>
        Sign up
      </Link>
      
    </div>
  )

}


export default Header