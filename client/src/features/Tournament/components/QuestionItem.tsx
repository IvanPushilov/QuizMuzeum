import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store/store';
import { rightAnswer } from '../answersSlice';
import '../styles/button.css';
import { userUpdateScore } from '../../Auth/authSlice';
import '../styles/game.css';

function QuestionItem(): JSX.Element {
  const { tournamentId } = useParams();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const questions = useSelector((store: RootState) =>
    store.questions.questions.filter((question) => question.tournament_id === Number(tournamentId)),
  );
  const answer = useSelector((store: RootState) => store.answers.answer);
  const user = useSelector((store: RootState) => store.auth.user);

  const [message, setMessage] = useState<string | null>('');
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState<boolean>(true);

  console.log(message);

  const sortedQuestions = questions.sort(
    (a, b) => a.tournament_id - b.tournament_id || a.id - b.id,
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const hasNextQuestion = currentQuestionIndex < sortedQuestions.length - 1;

  const goToNextQuestion = (): void => {
    if (hasNextQuestion) {
      const nextQuestionIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextQuestionIndex);
      window.scrollTo(0, 0);
      setMessage('');
      setIsAnswerVisible(false); // Скрыть ответ при переходе к следующему вопросу
      const nextQuestionId = sortedQuestions[nextQuestionIndex].id;
      navigate(
        `/tournaments/${tournamentId}/questions/${nextQuestionId}?index=${nextQuestionIndex}`,
      );
    }
  };

  const choiceAnswer = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const answerId = e.target.answer.value;
    dispatch(rightAnswer(answerId)).then((data) => {
      if (data.payload === 'Ответ верный') {
        dispatch(userUpdateScore(answerId)).catch(console.log);
      }
    });
    setMessage(answer);
    setIsAnswerVisible(true); // Показать ответ после выбора
    setIsNextButtonVisible(false); // Скрыть кнопку "Далее" после выбора ответа
  };

  const question = sortedQuestions[currentQuestionIndex];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const index = parseInt(searchParams.get('index') || '0', 10);
    setCurrentQuestionIndex(index);
  }, []);

  return (
    <div>

      <div className="user__score">У вас: {user?.score} очков!</div>
      {isAnswerVisible && <p className="answer-right">{answer}</p>}

      <div className="container">
        <div className="game-container">
          <div className="game-question__border">
            <p className="game-question__title">{question.title}</p>
          </div>
          <div className="game-question__price">
            <p className="balli">Цена: {question.price} баллов.</p>
          </div>
          <form className="game-form" onSubmit={choiceAnswer}>
            {question.Answers.map((answer) => (
              <div className="answers-container" key={answer.id}>
                <label className="answers__answer" htmlFor={`answer_${answer.id}`}>
                  {answer.answer}
                </label>
                <input
                  className="answers__checkbox"
                  defaultChecked
                  type="radio"
                  id={`answer_${answer.id}`}
                  name="answer"
                  value={answer.id}
                />
              </div>
            ))}
            <button className={message !== '' ? 'disabledBtn' : ' btn-answer'} type="submit">
              Ответить
            </button>
          </form>
          <div className='cont-btn'>


          {user && (
            <>
              <div className="btn-next">
                {hasNextQuestion ? (
                  <button
                    className={message === '' ? 'disabledBtn' : ' btn-next2'}
                    type="button"
                    onClick={goToNextQuestion}
                  >
                    Далее
                  </button>
                ) : (
                  <Link className='linkHome' to="/">Домой</Link>
                )}
              </div>
              
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionItem;
