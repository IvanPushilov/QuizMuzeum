import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store/store';
import QuestionItem from './QuestionItem';
import { getQuestionId } from '../questionsSlice';


function GamePage(): JSX.Element {

  // const [step, setStep] = useState(0)

  // const onClickAnswer = (): void => {
  //   setStep(step + 1)
  // }
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
  const questions = useSelector((store: RootState) => store.questions.questions)
  const currentQuestions = questions.filter((question) => question.tournament_id === currentGame?.id)

  const answers = useSelector((store: RootState) => store.answers.answers)
  const currentAnswers = answers.filter((answer) => answer.question_id === currentQuestions[0].id)

  if (!currentGame) {
    return <div>Карточка не найдена</div>;
  }

  return (
    <div>
     {currentQuestions.map((question) => (
      <QuestionItem key={question.id} question ={question}/>     
     ))}
    </div>
  );
}

export default GamePage;
