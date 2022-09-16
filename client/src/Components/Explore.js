import React from 'react'
import { useState } from 'react'
import SelectUSState from 'react-select-us-states'

export default function Explore() {

  const [userSearch, setUserSearch] = useState(
    {
      city: '',
      state: '',
      distance: ''
    }
  )
 

  function handleSubmit(e) {
    // e.preventDefault()
    console.log('sumbitted')
    
    fetch('/')
  }


  return (
    <main className='explore-page'>
      <div>
        <form onSubmit={handleSubmit()}>
          
          <input type="text" value = "city" placeholder="City"></input>
          
          <SelectUSState placeholder="state" />
          
          <label>Max distance:</label>
          <input type="number"></input>
          
          <button>submit</button>
        </form>
      </div>
    </main>
  )
}
