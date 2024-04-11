import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'
import { Link, useParams } from 'react-router-dom'

function TournamentPage(): JSX.Element {
    const { tournamentId } = useParams()
    const user = useSelector((store: RootState) => store.auth.user)

  const tournament = useSelector((store: RootState) => store.tournaments.tournaments.find((tournament) => tournament.id === Number(tournamentId)))
  const question = useSelector((store: RootState) => store.questions.questions[0]) 

  return (
    <div>
       <div>
      <img src={tournament?.img} alt="tournament" />
    </div>
    <h1>{tournament?.title}</h1>
    <p>{tournament?.time}</p>
    <p>{tournament?.description}</p>
    <p>{tournament?.info}</p>
   {user && <Link onClick={() => window.scrollTo(0, 0)} to={`/tournaments/${tournament?.id}/questions/${question.id}`}><button>Участвовать</button></Link> } 
    </div>
  )
}

export default TournamentPage