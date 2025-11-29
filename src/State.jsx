import React, { useState } from 'react'

const State = () => {
    const [num, setnum] = useState({user:'safiaa' ,age:'29'})
    const btnClicked =()=>{
    const newNum = {...num}
    newNum.user ='innaa'
    newNum.age = 43
setnum(newNum)
    }
    
  return (
    <div>
        <h1>{num.user} , {num.age}</h1>
        <button onClick={btnClicked}> click </button>
    </div>
  )
}

export default State