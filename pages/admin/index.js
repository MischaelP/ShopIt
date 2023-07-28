import React, { useState } from 'react'

function index() {

  const [articleName, setArticleName] = useState("");
  const [articlePrice, setArtticlePrice] = useState("");
  const [articleImage, setArticleImage] = useState("");
  const [articleDescription, setArticleDescription] = useState("") 
  return (
    <div>
        <h1 className='mt-[100px]'>ADMIN PAGE :  Add pictures</h1>
        <div className='flex justify-center h-screen'>
            <form>
                <label> Nom article : </label>
                <input type='text' id='articleName' className='border border-black px-4 mt-4' onChange={(target) => setArticleName(target?.value)} /><br/>
                <label className='mt-4'> Prix article : </label>
                <input type='text' id='articlePrice' className='border border-black px-4 mt-4' onChange={(target) => setArtticlePrice(target?.value)}/><br/>
                <label> Image article : </label>
                <input type='file' name='filupload' className='rounded pt-4'></input><br/>
                <label> Description : </label>
                <textarea className='border border-black rounded resize-none h-24 px-4 py-2 mt-4 pt-4' onChange={(target) => setArticleDescription (target?.value)} placeholder='Entrez votre texte'>

                </textarea><br/>
                <button className='border border-black px-4 py-2 rounded-xl'>Envoyer</button>
            </form>
        </div>
    </div>
  )
}

export default index