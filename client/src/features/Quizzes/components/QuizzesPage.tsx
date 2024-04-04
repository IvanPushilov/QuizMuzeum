import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'
import QuizzItem from './QuizzItem'

function QuizzesPage(): JSX.Element {

  const quizzes = useSelector((store: RootState) => store.quizzes.quizzes)

  return (
    <div>
      {quizzes.map((quizz) => (
        <QuizzItem key={quizz.id} quizz={quizz}/>
      ))}
    </div>
  )
}

export default QuizzesPage