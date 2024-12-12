import React from 'react'
import { useState } from 'react';
const One = () => {
    const [input,setuser] =useState("");
  const [customer,setcustomer] =useState([])
  const click=()=> {
    if(input) {
      setcustomer((ps)=> [...ps,input]) 
      
    }
  }
  
  return (
    <div>
          <div> 
      <h1> customer details</h1>
      <input type="text" onChange={(e)=> setuser(e.target.value)}/> 
      <button onClick={click}>ADD</button>
    </div>

    </div>
  )
}
export default One
