import './App.css'
import { useState } from 'react';
import { URL } from './constants';

function App() {
  const [question, setQuestion] = useState('');
  payload = {
    contents: [
      {
        parts: [{ text: question }]
      }
    ]
  }

  
  const askQuestion = async() => {
    let response = await fetch(URL, {
      method:"POST",
    })
  }
  return (
    <div className='grid grid-cols-5 h-screen text-center'>
      <div className='col-span-1 bg-zinc-800'>

      </div>

      <div className='col-span-4 p-10'>
        <div className='container h-[78vh]'>  

        </div>
        <div className= 'bg-zinc-800 w-1/2 p-1 text-white m-auto pr-5 rounded-4xl border border-zinc-600 flex h-16'>
          <input type="text" value={question} onChange={(event)=>setQuestion(event.target.value)} className=' w-full h-full p-3 px-6 outline-none bg-transparent' placeholder="ASk me anything" />
          <button  onClick={askQuestion}>Ask</button>
        </div>
      </div>
    </div>
  )
}

export default App