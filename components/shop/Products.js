import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

const url ='https://jsonplaceholder.typicode.com/users'


function Products() {
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] =useState(true);

    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         console.log(response)
    //         setUsers(response.data)
    //         console.log(users)
            
    //     });
    // },[])

    
     
      const getData = async () => {
        console.log(isLoading)
        const { data } = await axios.get(url);
        console.log(data)
        console.log(typeof data)
        setUsers(data);
        console.log(isLoading)
        console.log("users", users)
        console.log(isLoading)
    };
    useEffect(() => {
        getData()
        .then( setLoading(false)) 
        
      }, []);
      
      if(isLoading){
        return <div>Loading ...</div>
      }

    
    //En cas d'erreur, de retour vide
    // if (!users) return null;
    
        return (
            <div>
                <h1 className='mt-[200px]'>Liste des produits</h1>

                <div>
                {users.map((user) => {
                    <div>
                    <div>Hello Tripluch</div>
                    <div key={user.id}>
                        <li>{user.name}</li>
                    </div>
                    </div>
                })}
                </div>
                
            </div>
  )
}

export default Products