'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   const quizzesData = [
     {title:'quizz1 title', description:'quizz1 description', time: '8 Апреля 2024, 14:00', img: 'https://sun9-76.userapi.com/impg/uHW1gsm0-Gncys7zEGodU_ltLW4sIR0aSYCEuQ/JpOAk3Cdr1M.jpg?size=670x459&quality=96&sign=27ab352c5262360a83abc02584493360&type=album'},
     {title:'quizz2 title', description:'quizz2 description', time: '20 Июля 2024, 21:00', img: 'https://medialeaks.ru/wp-content/uploads/2018/09/na-glavnuyu.jpg'},
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
