import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Products from '@/components/shop/Products'


function collection(){

  const [data, setData] = useState('');

  useEffect(() => {
    // Appel de l'API au chargement du composant
    callAPI();
  }, []);

  const callAPI = () => {
    axios.get("http://localhost:3001/testAPI")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la requête:', error);
      });
  };

  
  return (
     <div>
        <p className='mt-[200px]'> les infos {console.log(data)}</p>
    </div>
  )
}



export default collection