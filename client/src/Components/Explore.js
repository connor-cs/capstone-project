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
  const [hikes, setHikes] = useState([])
 
  function handleChange(e) {
    const { name, value } = e.target
    setUserSearch({...userSearch, [name]: value})
    console.log('name:', name, 'value:', value)
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log('sumbitted')
    console.log(userSearch)
    // fetch('/hikes', {
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(userSearch)
    // })
    // .then(res=>res.json)
  }


  return (
    <main className='explore-page'>
      
      <div>
        <form onSubmit={onSubmit}>
          
          <input type="text" name="city" value={userSearch.city} placeholder="City" onChange={handleChange}></input>
          
          <SelectUSState placeholder="state" name="state" value={userSearch.state} />
          
          <label>Max distance:</label>
          <input type="number" name="distance" onChange={handleChange}></input>
          
          <button>submit</button>
        </form>
      </div>
      <div className='results'>

      </div>

    </main>
  )
}
