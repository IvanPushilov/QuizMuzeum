import React from 'react'
import type { Quizz } from '../type'

function QuizzItem({quizz}: {quizz: Quizz}): JSX.Element {

  return (
    <div>
    <div>
      <img src={quizz.img} alt="quizz" />
    </div>
    <h1>{quizz.title}</h1>
    <p>{quizz.time}</p>
    <p>{quizz.description}</p>
    </div>
  )
}

export default QuizzItem