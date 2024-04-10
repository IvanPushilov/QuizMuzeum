import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store/store';
import QuestionItem from './QuestionItem';
import { getQuestionId } from '../questionsSlice';


function GamePage(): JSX.Element {

  const { questionId } = useParams();
  const { tournamentId } = useParams();
  const dispatch = useAppDispatch()

  console.log(questionId);
  
  useEffect(() => {
    dispatch(getQuestionId(questionId)).catch(console.log)
  }, [])

  const currentGame = useSelector((store: RootState) =>
    store.tournaments.tournaments.find((tournament) => tournament.id === Number(tournamentId)),
  );

  if (!currentGame) {
    return <div>Карточка не найдена</div>;
  }

  return (
      <QuestionItem />    
  );
}

export default GamePage;
