'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
 const answersData = [
   {question_id: 1, isCorrect: true, answer: 'answer1'},
   {question_id: 1, isCorrect: false, answer: 'answer2'},
   {question_id: 1, isCorrect: false, answer: 'answer3'},
   {question_id: 1, isCorrect: false, answer: 'answer4'},
   {question_id: 2, isCorrect: true, answer: 'answer5'},
   {question_id: 2, isCorrect: false, answer: 'answer6'},
   {question_id: 2, isCorrect: false, answer: 'answer7'},
   {question_id: 2, isCorrect: false, answer: 'answer8'},
   {question_id: 3, isCorrect: true, answer: 'answer9'},
   {question_id: 3, isCorrect: false, answer: 'answer10'},
   {question_id: 3, isCorrect: false, answer: 'answer11'},
   {question_id: 3, isCorrect: false, answer: 'answer12'},
   {question_id: 4, isCorrect: true, answer: 'answer13'},
   {question_id: 4, isCorrect: false, answer: 'answer14'},
   {question_id: 4, isCorrect: false, answer: 'answer15'},
   {question_id: 4, isCorrect: false, answer: 'answer16'},
   {question_id: 5, isCorrect: true, answer: 'answer17'},
   {question_id: 5, isCorrect: false, answer: 'answer18'},
   {question_id: 5, isCorrect: false, answer: 'answer19'},
   {question_id: 5, isCorrect: false, answer: 'answer20'},
   {question_id: 6, isCorrect: true, answer: 'answer21'},
   {question_id: 6, isCorrect: false, answer: 'answer22'},
   {question_id: 6, isCorrect: false, answer: 'answer23'},
   {question_id: 6, isCorrect: false, answer: 'answer24'},
   
 ]
 const answers = answersData.map((answer) => ({
   ...answer,
   createdAt: new Date(),
   updatedAt: new Date(),
 }))
 await queryInterface.bulkInsert("Answers", answers);
  },

  async down (queryInterface) {
   await queryInterface.bulkDelete("Answers")
  }
};
