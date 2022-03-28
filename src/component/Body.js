import React from 'react'
import memesData from './Meme'
import { useState } from 'react'

export default function Body () {
    // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/30b1gx.jpg")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        console.log(url)
    }
      
    return (
        <div className='body-div'>
            <form className='form-elements'>
                <input className='input' placeholder='top-text'></input>
                <input className='input'placeholder='bottom-text'></input>
                <button onClick= {getMemeImage}>Get a new meme image</button>

            </form>
            <div className='img-div'>
            <img src={meme.randomImage} alt='' className="meme--image" />
            </div>
        </div>
    )
}