import React, { useState } from 'react'

const App = () => {
const [num, setnum] = useState(0)
function increaseNum(){
 setnum(num+1)
}

function decreaseNum(){
setnum(num-1)
}
function jumpby(){
setnum(num+4)
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jumpby}>Increase by 4</button>

    </div>
  )
}

export default App