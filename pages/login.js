import React from 'react'

function login() {
  return (
    <>
        <div className='flex items-center justify-center h-[500px]'>
          <form className='w-[400px] border border-gray-500 space-y-4 bg-white py-4 rounded-md pl-2'>
              <div className='flex space-x-4 mb-4'>
              <label className='pl-16 ml-3'>Mail : </label>
              <input type='mail' name='prenom' id='mail' placeholder='votre email' className='border border-gray-500 rounded-md px-4 py-2'></input><br/>
              </div>
              
              <div className='flex space-x-4 mb-4'>
              <label className='pl-1 ml-1'>Mot de passe : </label>
              <input type='password' name='paswword' id='password' className='border border-gray-500 rounded-md px-4 py-2'></input><br/>
              </div>

              <div className='flex justify-center'>
                <button className='bg-orange-600 text-white rounded-md py-3 px-2 hover:text-black hover:bg-white'>Se connecter</button>
              </div>
          </form>

        </div>
    </>
  )
}

export default login