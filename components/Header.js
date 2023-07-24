import React from 'react'
import Link from 'next/link'
import { useState } from 'react'


function Header() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className='container z-50 mx-auto px-4 sm:w-auto'>
      <nav className='fixed top-0 w-full flex justify-center p-4 bg-slate-50 text-xl font-semibold pt-6'>
        <ul className={`${showMenu ? "block" : "hidden" }flex-col items-center justify-center bg-slate-50 w-full absolute top-full sm:flex sm:relative sm:flex-row sm:pb-0 sm:justify-center`}>
            <li>
              <Link href='/' className=' inline-block px-4 py-2 mt-4 mr-2 rounded hover:bg-orange-600 hover:text-white sm:py-0'>Home</Link>
              </li>
            <li>
              <Link href='/collection' className=' inline-block px-4 py-2 mt-4 mr-2 rounded hover:bg-orange-600 hover:text-white sm:py-0'>Collections</Link>
              </li>
            <li>
              <Link href='/inscription' className=' inline-block px-4 py-2 mt-4 mr-2 rounded hover:bg-orange-600 hover:text-white sm:py-0'>Rejoindre</Link>
              </li>
            <li>
              <Link href='/login' className=' inline-block px-4 py-2 mt-4 mr-2 rounded hover:bg-orange-600 hover:text-white sm:py-0'>Se connecter</Link>
              </li>
            
        </ul>
        </nav>
       </div>
    </>
  )
}

export default Header