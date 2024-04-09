import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import {useParams } from 'react-router-dom';
import { rightAnswer } from '../answersSlice';
import '../styles/button.css'
function QuestionItem(): JSX.Element {
  const { tournamentId } = useParams();
  const dispatch = useAppDispatch()
  
  const questions = useSelector((store: RootState) => store.questions.questions.filter(question => question.tournament_id === Number(tournamentId)));
  const answer = useSelector((store: RootState) => store.answers.answer);
  console.log(answer);
  const [message, setMessage] = useState('')
  

  // Сортируем вопросы по теме и индексу внутри темы для упорядочивания
  const sortedQuestions = questions.sort((a, b) => a.tournament_id - b.tournament_id || a.id - b.id);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Проверка на существование следующего вопроса
  const hasNextQuestion = currentQuestionIndex < sortedQuestions.length - 1;

  // Переход к следующему вопросу
  const goToNextQuestion = (): void => {
    if (hasNextQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.scrollTo(0, 0); // Прокрутить страницу вверх
      setMessage('')
    }
  };


  const choiceAnswer = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault()
    const answerId = e.target.answer.value
    dispatch(rightAnswer(answerId)).catch(console.log)
    
    
  }

  // Получаем текущий вопрос
  const question = sortedQuestions[currentQuestionIndex];

  // Если вопросы закончились
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
          <>
          <label htmlFor="quest">{answer.answer}</label>
          <input type="radio" id='quest' name="answer" value={answer.id} />
          </>
        ))}
        <button className={message !== '' ? 'disabledBtn' : ''} type='submit' onClick={()=> setMessage(answer)}>Ответить</button>
       </form>
       <div>{message}</div>
      </div>
      {/* Показать кнопку "Далее", если есть следующий вопрос */}
      {hasNextQuestion && (
        <button type='button' onClick={goToNextQuestion}>
          Далее
        </button>
      )}
    </>
  );
}

export default QuestionItem;