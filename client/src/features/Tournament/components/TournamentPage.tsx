import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'
import { Link, useParams } from 'react-router-dom'
import '../styles/toutnament.css'


function TournamentPage(): JSX.Element {
    const { tournamentId } = useParams()
    const user = useSelector((store: RootState) => store.auth.user)

  const tournament = useSelector((store: RootState) => store.tournaments.tournaments.find((tournament) => tournament.id === Number(tournamentId)))
  const question = useSelector((store: RootState) => store.questions.questions[0]) 

  return (
    <div className='container-card'>
       <div>
      <img className='img-tour' src={tournament?.img} alt="tournament" />
    </div>
    <div className='container-info' >
    <h1 className='info'>{tournament?.title}</h1>
    <p className='info'>{tournament?.time}</p>
    <p className='info'>{tournament?.description}</p>
    <p className='info'>{tournament?.info}</p>
   {user && <Link onClick={() => window.scrollTo(0, 0)} to={`/tournaments/${tournament?.id}/questions/${question.id}`}><button className='btn'>Участвовать</button></Link> } 
    </div>
    </div>
  )
}

export default TournamentPage