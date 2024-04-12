import React from 'react'
import type { Tournament } from '../type'
import { Link } from 'react-router-dom'
import '../styles/toutnament.css'


function TournamentItem({tournament}: {tournament: Tournament}): JSX.Element {


  return (
     <Link className='link-tour' onClick={() => window.scrollTo(0, 0)} to={`/tournaments/${tournament.id}`}>
    <div className='container-card'>
       
    <div>
      <img className='img-tour' src={tournament.img} alt="tournament" />
    </div>
    <div className='container-info' >
    <h1 className='info'>{tournament.title}</h1>
    <p className='info'>{tournament.time}</p>
    <p className='info'>{tournament.description}</p>
    </div>

    </div>
    </Link>
  )
}

export default TournamentItem





