import React from 'react'
import Link from 'next/link'

function Error404() {
  return (
    <>
        <div>
            <h1>La page demandé n'existe pas</h1>
            <Link href='/'><h1>Retour à l'acceuil</h1></Link>
        </div>
    </>
  )
}

export default Error404