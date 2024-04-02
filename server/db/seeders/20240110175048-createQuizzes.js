'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   const quizzesData = [
     {title:'quizz1 title', description:'quizz1 description'},
     {title:'quizz2 title', description:'quizz2 description'},
   ]
  

  const quizzes = quizzesData.map((quizz) => ({
    ...quizz,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  await queryInterface.bulkInsert("Quizzes", quizzes);
},

async down(queryInterface) {
  await queryInterface.bulkDelete("Quizzes")
},
};
