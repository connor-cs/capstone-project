import React from 'react'

export default function TrailCard({trail}) {
  return (
    <div key={trail.id} className={"trailcard"}>
      <h2>{trail.name}</h2>
      <p>{trail.length}miles</p>
      <p>{trail.description}</p>
      <p>{trail.city} {trail.state}</p>
    </div>
  )
}
