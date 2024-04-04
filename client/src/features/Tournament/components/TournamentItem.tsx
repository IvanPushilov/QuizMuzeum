import React from 'react'
import type { Tournament } from '../type'

function TournamentItem({tournament}: {tournament: Tournament}): JSX.Element {

  return (
    <div>
    <div>
      <img src={tournament.img} alt="tournament" />
    </div>
    <h1>{tournament.title}</h1>
    <p>{tournament.time}</p>
    <p>{tournament.description}</p>
    </div>
  )
}

export default TournamentItem