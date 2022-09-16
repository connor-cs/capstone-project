import React from 'react'
import SelectUSState from 'react-select-us-states'

export default function Explore() {




  return (
    <main className='explore-page'>
      <div>
        <form>
          <input type="text" placeholder="City"></input>
          <SelectUSState placeholder="state" />
          <label>Max distance:</label>
          <input type="number"></input>
        </form>
      </div>
    </main>
  )
}
