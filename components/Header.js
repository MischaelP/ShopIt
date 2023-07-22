import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
    <nav>
        <ul className='flex gap-12 flex-auto justify-end flex-row m-8 sm:gap-8' style={{ minWidth: '320px' }}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/collection'>Collections</Link></li>
            <li><Link href='/inscription'>Rejoindre</Link></li>
            <li><Link href='/login'>Login</Link></li>
            
        </ul>
    </nav>
    </>
  )
}

export default Header