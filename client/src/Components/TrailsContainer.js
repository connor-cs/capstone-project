import React from 'react'
import TrailCard from './TrailCard'
import { useEffect, useState } from 'react'

export default function TrailsContainer({errors}) {
    const [trails, setTrails] = useState([])
     
    // useEffect(fetch('/trails')
    //  .then(res=>console.log(res.json))
    //  )

    return (
        <div>
            {errors ? errors : null}
        </div>

    )
}
