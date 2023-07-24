import React, { useState } from 'react'
import { useEffect, useRef } from 'react'

function inscription() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [mdp2, setMdp2] = useState("");

  const [showError,setShowError] = useState(false)

  const checkPassword = () => {
    if (mdp===mdp2) return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (checkPassword() == true) {
      console.log("ok")
    }
  } 



  return (
    <>
      <div className='flex items-center justify-center h-[900px]'>
        <form className='bg-white p-6 rounded-md shadow-md w-90 space-y-4'>
        <div className='flex space-x-4 mb-4'>
          <label className='pl-10'>Prénom : </label>
          <input type='text' name='prenom' id='prenom' placeholder='prenom' 
          onChange={({target}) => setPrenom(target?.value)}
          className='border border-gray-500 rounded-md px-4 py-2'></input><br/>
          </div>

          <div className='flex space-x-4 mb-4'>
          <label className='pl-16'> Nom : </label>
          <input type='text' name='nom' id='nom' placeholder='nom' 
          onChange={({target}) => setNom(target?.value)}
          className='border border-gray-500 rounded-md px-4 py-2'></input><br/>
          </div>
          
          <div className='flex space-x-4 mb-4'>
          <label className='pl-4'> Votre email : </label>
          <input type='email' name='email' id='email' placeholder='email' 
          onChange={({target}) => setEmail(target?.value)}
          className='border border-gray-500 rounded-md px-4 py-2'></input><br/>
          </div>
          <div className='flex space-x-4 mb-4'>
          <label> Mot de passe : </label>
          <input type='password' name='Mot de passe' id='mdp' placeholder='Mot de passe' 
          onChange={({target}) => setMdp(target?.value)}
          className='border border-gray-500 rounded-md px-4 py-2'></input><br/>
          </div>

          <div className='flex space-x-4 mb-4'>
          <label> Mot de passe : </label>
          <input type='password' name='prenom' id='mdp2' placeholder='Répeter Mot de passe' 
          onChange={({target}) => setMdp2(target?.value)}
          className='border border-gray-500 rounded-md px-4 py-2'></input><br/>
          </div>

          <div className='zone-btn flex flex-col'>
            <button onClick={handleSubmit}className='px-4 py-2 bg-orange-600 text-white font-bold rounded-md hover:bg-white hover:text-black hover:font-bold'>S'inscrire</button><br/>
            <button className='px-4 py-2 bg-red-700 text-white font-bold hover:bg-white hover:text-red-700 rounded-md'>Effacer</button>
          </div>
          </form>
          
      </div>
  
    
    </>
  )
}

export default inscription