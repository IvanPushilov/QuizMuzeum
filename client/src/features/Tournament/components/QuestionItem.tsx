import React, { useState } from 'react';
import { Question } from '../type';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Link, useParams } from 'react-router-dom';

function QuestionItem(): JSX.Element {
  const questions = useSelector((store: RootState) => store.questions.questions);
  const { tournamentId } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  console.log(tournamentId);
  console.log(questions);

  

  // Получить текущий вопрос
  const question = questions[currentQuestionIndex];

  // Функция для перехода к следующему вопросу
 

      const goToNextQuestion = ():void => {
        if(question.tournament_id === +tournamentId){

          if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            window.scrollTo(0, 0); // Прокрутить страницу вверх при переходе к следующему вопросу
          }
        }
      };
    

  return (
    <>
      <div>
        <p>{question?.title}</p>
        <p>{question?.price}</p>
        {question.Answers.map((answer) => (
          <p key={answer.id}>{answer.answer}</p>
        ))}
      </div>
      {/* Показать ссылку "Далее", если есть следующий вопрос */}
      {currentQuestionIndex < questions.length - 1 && (
        <Link onClick={goToNextQuestion} to={`/tournaments/${tournamentId}/questions/${question.id + 1}`}>
          Далее
        </Link>
      )}
    </>
  );
}

export default QuestionItem;