import React from 'react'
import TrailCard from './TrailCard'
import { useEffect, useState } from 'react'

export default function TrailsContainer({errors, trails}) {

    return (
        <div>
            {errors ? errors : null}
        </div>

    )
}
