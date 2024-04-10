import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store/store';
import { rightAnswer } from '../answersSlice';
import '../styles/button.css';
import { userUpdateScore } from '../../Auth/authSlice';

function QuestionItem(): JSX.Element {
  const { tournamentId } = useParams();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const questions = useSelector((store: RootState) => store.questions.questions.filter(question => question.tournament_id === Number(tournamentId)));
  const answer = useSelector((store: RootState) => store.answers.answer);
  const [message, setMessage] = useState('');

  const sortedQuestions = questions.sort((a, b) => a.tournament_id - b.tournament_id || a.id - b.id);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0); // Установка начального значения индекса

  const hasNextQuestion = currentQuestionIndex < sortedQuestions.length - 1;

  const goToNextQuestion = (): void => {
    if (hasNextQuestion) {
      const nextQuestionIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextQuestionIndex);
      window.scrollTo(0, 0);
      setMessage('');
      const nextQuestionId = sortedQuestions[nextQuestionIndex].id;
      navigate(`/tournaments/${tournamentId}/questions/${nextQuestionId}?index=${nextQuestionIndex}`);
    }
  };

  const choiceAnswer = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const answerId = e.currentTarget.elements['answer'].value;
    dispatch(rightAnswer(answerId)).then((data) => {
      console.log(data, '---------------');
      
      if (data.payload === 'Ответ верный'){

        console.log('-----------------');
        
        dispatch(userUpdateScore(answerId)).catch(console.log)
      }
    })

    }
  

  const question = sortedQuestions[currentQuestionIndex];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const index = parseInt(searchParams.get('index') || '0', 10);
    setCurrentQuestionIndex(index); // Установка начального значения индекса только при монтировании компонента
  }, []); // Пустой массив зависимостей, чтобы useEffect вызывался только при монтировании компонента

  if (!question) {
    return <div>Вопросы закончились или не найдены.</div>;
  }

  return (
    <>
      <div>
        <p>{question.title}</p>
        <p>{question.price}</p>
        <form onSubmit={choiceAnswer}> 
          {question.Answers.map((answer) => (
            <div key={answer.id}>
              <label htmlFor={`answer_${answer.id}`}>{answer.answer}</label>
              <input type="radio" id={`answer_${answer.id}`} name="answer" value={answer.id} />
            </div>
          ))}
          <button className={message !== '' ? 'disabledBtn' : ''} type='submit' onClick={()=> setMessage(answer)}>Ответить</button>
        </form>
        <div>{message}</div>
      </div>
      {hasNextQuestion && (
        <button type='button' onClick={goToNextQuestion}>
          Далее
        </button>
      )}
    </>
  );
}

export default QuestionItem;
