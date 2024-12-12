import React from 'react' 
import data from"./data.json"

const Data = () => {
  return (
    <div>
      {
        data.Data.map((item)=> {
            return(
                <>  
                <img src={item.profile} alt="not visible" />
                <h1>{item.name} </h1> 
                <h1>{item.price}</h1>
                </>
            )
        })
      }
    </div>
  )
}

export default Data
