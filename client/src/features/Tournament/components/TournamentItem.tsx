import React from 'react'
import type { Tournament } from '../type'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

function TournamentItem({tournament}: {tournament: Tournament}): JSX.Element {

  const question = useSelector((store: RootState) => store.questions.questions[0]) 

  return (
    <div>
       <Link onClick={() => window.scrollTo(0, 0)} to={`/tournaments/${tournament.id}/questions/${question.id}`}>
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