import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {TextField, Button, CircularProgress} from '@mui/material'
import OpenAI from "openai";

function App() {
  const openai = new OpenAI({apiKey: "example-key", dangerouslyAllowBrowser: true});

  // const [count, setCount] = useState(0)
const [text, setText] = useState("")
const [loading, setLoading] = useState(false)
const [imgUrl, setImgUrl] = useState("")

const handleSubmit = async () => {
  alert('handleSubmit')
  alert(text)
  setLoading(true)
  const image = await openai.images.generate({ prompt: text });

//   const completion = await openai.chat.completions.create({
//     model: "gpt-4o",
//     messages: [
//         {"role": "user", "content": "write a haiku about ai"}
//     ]
// });
console.log('image')
console.log(image)
// const image = ""

console.log(image.data[0].url);
setImgUrl(image?.data[0]?.url || "")
setLoading(false)
}

  return (
      <div style={{display: 'grid'}}>
       {/*  <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        </p> */}
      <TextField id="text-prompt" label="Ingrese un texto aquí" value={text} onChange={(e) => setText(e.target.value)}/>
      <Button variant="contained" onClick={handleSubmit}>Generar</Button>
      {/* {loading ? <CircularProgress /> :  <p>{imgUrl}</p>} */}
      {loading ? <CircularProgress /> :  <img src={imgUrl} width={500} height={500}/>}
        </div>
  )
}

export default App
