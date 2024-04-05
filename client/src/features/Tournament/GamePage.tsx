import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';


function GamePage(): JSX.Element {
  const { tournamentId } = useParams();
  const selectedTournament = useSelector((store: RootState) =>
    store.tournaments.tournaments.find((tournament) => tournament.id === Number(tournamentId)),
  );

  if (!selectedTournament) {
    return <div>Карточка не найдена</div>;
  }

  return (
    <div>
      <h1>tut igra</h1>
    </div>
  );
}

export default GamePage;
