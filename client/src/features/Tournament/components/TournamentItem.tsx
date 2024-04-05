import React from 'react'
import type { Tournament } from '../type'
import { Link } from 'react-router-dom'

function TournamentItem({tournament}: {tournament: Tournament}): JSX.Element {

  return (
    <div>
       <Link onClick={() => window.scrollTo(0, 0)} to={`/tournaments/${tournament.id}`}>
    <div>
      <img src={tournament.img} alt="tournament" />
    </div>
    <h1>{tournament.title}</h1>
    <p>{tournament.time}</p>
    <p>{tournament.description}</p>
    </Link>
    </div>
  )
}

export default TournamentItem