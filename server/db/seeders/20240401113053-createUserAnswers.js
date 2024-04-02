'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
 const answersData = [
   {answer_id:'1', user_id: 1, question_id: 1},
   {answer_id:'2', user_id: 1, question_id: 2},
   {answer_id:'3', user_id: 1, question_id: 3},
   {answer_id:'4', user_id: 2, question_id: 4},
   {answer_id:'5', user_id: 2, question_id: 5},
   {answer_id:'6', user_id: 2, question_id: 6},
 ]
 const answers = answersData.map((answer) => ({
   ...answer,
   createdAt: new Date(),
   updatedAt: new Date(),
 }))
 await queryInterface.bulkInsert("UserAnswers", answers);
  },

  async down (queryInterface) {
   await queryInterface.bulkDelete("UserAnswers")
  }
};
