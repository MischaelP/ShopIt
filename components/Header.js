import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
    <nav>
        <ul className='flex gap-12 flex-row-reverse m-8'>
            <li><Link href='/login'>Login</Link></li>
            <li><Link href='/inscription'>Rejoindre</Link></li>
            <li><Link href='/collection'>Collections</Link></li>
            <li><Link href='/'>Home</Link></li>
            
        </ul>
    </nav>
    </>
  )
}

export default Header