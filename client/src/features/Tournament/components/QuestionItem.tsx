import React from 'react'
import { Question } from '../type'

function QuestionItem({question}: {question: Question}): JSX.Element {
  return (
    <div>
      <p>{question.title}</p>
      <p>{question.price}</p>
      {question.Answers.map((answer) => (
        <p key={answer.id}>{answer.answer}</p>
      ))}
    </div>
  )
}

export default QuestionItem