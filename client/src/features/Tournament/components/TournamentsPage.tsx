import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'
import TournamentItem from './TournamentItem'

function TournamentPage(): JSX.Element {

  const Tournaments = useSelector((store: RootState) => store.tournaments.tournaments)

  return (
    <div>
      {Tournaments.map((tournament) => (
        <TournamentItem key={tournament.id} tournament={tournament}/>
      ))}
    </div>
  )
}

export default TournamentPage