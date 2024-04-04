'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   const questionsData = [
     {title:'question1 title', tournament_id: 1, price: 100},
     {title:'question2 title', tournament_id: 1, price: 200},
     {title:'question3 title', tournament_id: 1, price: 300},
     {title:'question4 title', tournament_id: 2, price: 100},
     {title:'question5 title', tournament_id: 2, price: 200},
     {title:'question6 title', tournament_id: 2, price: 300},
   ]
   const questions = questionsData.map((question) => ({
     ...question,
     createdAt: new Date(),
     updatedAt: new Date(),
   }))
   await queryInterface.bulkInsert("Questions", questions);
  },

  async down (queryInterface) {
   await queryInterface.bulkDelete("Questions")
  }
};
