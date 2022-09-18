import React from 'react'
import HikeCard from './TrailCard'
import { useEffect, useState } from 'react'

export default function Hikes() {
    const [trails, setTrails] = useState([])
     
    useEffect(fetch('/trails')
     .then(res=>console.log(res.json))
     )

    return (
        <div>

        </div>

    )
}
