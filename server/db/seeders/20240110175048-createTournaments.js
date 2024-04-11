'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   const tournamentsData = [
     {title:'Открытый турнир', description:'История и развитие нефтегазовой отрасли России',info:`Приглашаем вас пройти Онлайн-турнир по истории и экономике нефтегазовой отрасли России. Здесь, отвечая на вопросы, Вы будете набирать очки за правильные ответы. Проверьте свои знания, приятной игры!`, time: '8 Апреля 2024, 14:00', img: 'https://sun9-76.userapi.com/impg/uHW1gsm0-Gncys7zEGodU_ltLW4sIR0aSYCEuQ/JpOAk3Cdr1M.jpg?size=670x459&quality=96&sign=27ab352c5262360a83abc02584493360&type=album'},
     {title:'tournament2 title', description:'tournament2 description', time: '20 Июля 2024, 21:00', img: 'https://medialeaks.ru/wp-content/uploads/2018/09/na-glavnuyu.jpg'},
   ]
  

  const tournaments = tournamentsData.map((tournament) => ({
    ...tournament,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  await queryInterface.bulkInsert("Tournaments", tournaments);
},

async down(queryInterface) {
  await queryInterface.bulkDelete("Tournaments")
},
};
