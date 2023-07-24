import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Products from '@/components/shop/Products'

const url ='https://jsonplaceholder.typicode.com/users'
function collection() {
  const [users, setUsers] = useState([])

  useEffect( () => {
    axios.get(url)
    .then((response) => { setUsers(response.data)})

  },[])

  console.log(users)
  return (
    <div>
    <h1 className='mt-[200px]'>Présentation des collections </h1>
      <ul>
        {users.map((user) => 
          <li key={user.id}>Utilisateur : {user.name}</li>
          
        )}
      </ul>
    </div>
  )
}



export default collection