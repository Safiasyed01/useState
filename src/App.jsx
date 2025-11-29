import React, { useState } from 'react'

const App = () => {
//const [num, setnum] = useState(98)
//const [name, setname] = useState('safiaa')
const [num, setnum] = useState(12)
const [first, setfirst] = useState('innaa')
function changeNum(){
  setnum(89)
  setfirst('shanz')
}
  return (
    <div>
     {/* // <h1>the value is {name}</h1> */}
     <h1> {num }, {first}</h1>
     <button onClick={changeNum}click></button>
    </div>
  )
}

export default App
