import React from 'react'
import { Link } from 'react-router-dom'

import { useStore } from '../store/StoreContext'


const Header = () => {
  const { isAuthenticated, logout } = useStore()

  console.log('context')
  return (
    <div className='flex items-center justify-between px-10 bg-slate-700 h-14'>
      <Link to='/barbers' className='text-white cursor-pointer'>
       Barber
      </Link>
      <div>
        {
          isAuthenticated ?
            <button onClick={logout}>Log out</button> :
            <div>

              <Link to='/auth/signup' className='text-xl text-white cursor-pointer'>
                Sign up
              </Link>
              <Link to='/auth/signin' className='ml-10 text-xl text-white cursor-pointer'>
                Sign in
              </Link>
            </div>
        }
      </div>
    </div>
  )

}


export default Header