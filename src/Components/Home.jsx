import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [option, setOption] = useState([])
  const [to, setTo] = useState("en")
  const [from, setFrom] = useState("en")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const translat = () => {
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('format','text')
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    axios.post('https://libretranslate.de/translate', params,
      { headers:{ 'accept': 'application/json' ,"Content-Type": "application/x-www-form-urlencoded" } }
    ).then(res => {
      console.log(res.data)
      setOutput(res.data.translatedText)
    })
  }

  useEffect(() => {
    axios.get('https://libretranslate.com/languages',
      { headers: { 'accept': 'application/json' } }
    ).then(res => {
      console.log(res.data)
      setOption(res.data);
    })
  }, [])

  return (
    <div className="p-3">
      <div className="p-2 m-0 text-center text-lg">
        From ({from}):
        <select onChange={e => setFrom(e.target.value)} className=" m-2 p-2 text-center border border-black border-solid">
          {option.map(opt => <option key={opt.code} value={opt.code}>{opt.name}</option>)}
        </select>
        To ({to}):

        <select onChange={e => setTo(e.target.value)} className=" m-2 p-2 text-center border border-black border-solid">
          {option.map(opt => <option key={opt.code} value={opt.code}>{opt.name}</option>)}
        </select>

      </div>
      <div className="p-2 m-0 text-center ">
        <textarea className="border border-black border-solid" cols="50" rows="8" onInput={e => setInput(e.target.value)}></textarea>
      </div>
      <div className="p-2 m-0 text-center">
        <textarea className="border border-black border-solid" cols="50" rows="8" value={output}></textarea>
      </div>
      <div className="m-0 text-center p-2">
        <button onClick={translat} className="bg-orange-400 p-2 border border-black border-solid hover:cursor-pointer rounded-xl transition-transform duration-200 hover:scale-125">Translate</button>
      </div>
    </div>
  )
}

export default Home
