'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
 const answersData = [
   {question_id: 1, isCorrect: false, answer: 'Ямбургское'},
   {question_id: 1, isCorrect: false, answer: 'Бованенковское'},
   {question_id: 1, isCorrect: false, answer: 'КарскоеЧаяндинское'},
   {question_id: 1, isCorrect: true, answer: 'Медвежье'},
   {question_id: 1, isCorrect: false, answer: 'Уренгойское'},
   {question_id: 1, isCorrect: false, answer: 'Самотлорское'},

   {question_id: 2, isCorrect: false, answer: 'Камчатка'},
   {question_id: 2, isCorrect: false, answer: 'Чукотка'},
   {question_id: 2, isCorrect: true, answer: 'Ямал'},
   {question_id: 2, isCorrect: false, answer: 'Таймыр'},
   {question_id: 2, isCorrect: false, answer: 'Кольский'},

   {question_id: 3, isCorrect: false, answer: 'Самара'},
   {question_id: 3, isCorrect: false, answer: 'Киев'},
   {question_id: 3, isCorrect: true, answer: 'Альметьевск'},
   {question_id: 3, isCorrect: false, answer: 'Ленинград'},
   {question_id: 3, isCorrect: false, answer: 'Сургут'},

   {question_id: 4, isCorrect: false, answer: 'Туркмения'},
   {question_id: 4, isCorrect: false, answer: 'Афганистан'},
   {question_id: 4, isCorrect: true, answer: 'Узбекистан'},
   {question_id: 4, isCorrect: false, answer: 'Казахстан'},
   {question_id: 4, isCorrect: false, answer: 'Таджикистан'},
   {question_id: 4, isCorrect: false, answer: 'Киргизия'},

   {question_id: 5, isCorrect: true, answer: 'Казахская и Украинская'},
   {question_id: 5, isCorrect: false, answer: 'Белоруская и Литовская'},
   {question_id: 5, isCorrect: false, answer: 'Эстонская и Латвийская'},
   {question_id: 5, isCorrect: false, answer: 'Туркменская и Таджикская'},
   {question_id: 5, isCorrect: false, answer: 'Грузинская и Армянская'},

   {question_id: 6, isCorrect: true, answer: 'Бугуруслан – Куйбышев'},
   {question_id: 6, isCorrect: false, answer: 'Сарапульско-Уфимский'},
   {question_id: 6, isCorrect: false, answer: 'Сталинградско-Ростовский'},
   {question_id: 6, isCorrect: false, answer: 'Московско-Ленинградский'},

   {question_id: 7, isCorrect: false, answer: '1984'},
   {question_id: 7, isCorrect: true, answer: '1983'},
   {question_id: 7, isCorrect: false, answer: '1978'},
   {question_id: 7, isCorrect: false, answer: '1968'},

   {question_id: 8, isCorrect: true, answer: 'Нивелир'},
   {question_id: 8, isCorrect: false, answer: 'Теодолит'},
   {question_id: 8, isCorrect: false, answer: 'Геодезический компас'},
   {question_id: 8, isCorrect: false, answer: 'Привелир'},

   {question_id: 9, isCorrect: false, answer: 'Андрей Сахаров'},
   {question_id: 9, isCorrect: true, answer: 'Владимир Шухов'},
   {question_id: 9, isCorrect: false, answer: 'Игорь Сикорский'},
   {question_id: 9, isCorrect: false, answer: 'Владимир Зворыкин'},
   {question_id: 9, isCorrect: false, answer: 'Сергей Королев'},

   {question_id: 10, isCorrect: true, answer: 'Нивелир'},
   {question_id: 10, isCorrect: false, answer: 'Теодолит'},
   {question_id: 10, isCorrect: false, answer: 'Геодезический компас'},
   {question_id: 10, isCorrect: false, answer: 'Привелир'},

   {question_id: 11, isCorrect: true, answer: 'Радиостанция'},
   {question_id: 11, isCorrect: false, answer: 'Радиоприемник'},
   {question_id: 11, isCorrect: false, answer: 'Радиомаяк'},
   {question_id: 11, isCorrect: false, answer: 'Радиоспутник'},

   {question_id: 12, isCorrect: true, answer: 'Акселерометр'},
   {question_id: 12, isCorrect: false, answer: 'Гироскоп'},
   {question_id: 12, isCorrect: false, answer: 'Манометр'},
   {question_id: 12, isCorrect: false, answer: 'Тахометр'},

   {question_id: 13, isCorrect: true, answer: 'Михаил Шемякин'},
   {question_id: 13, isCorrect: false, answer: 'Лазарь Каганович'},
   {question_id: 13, isCorrect: false, answer: 'Александр Громыко'},
   {question_id: 13, isCorrect: false, answer: 'Василий Молотов'},

   {question_id: 14, isCorrect: true, answer: 'Нефть. Газ. Тюмень'},
   {question_id: 14, isCorrect: false, answer: 'Жизнь в нефтяных месторождениях Тюмени'},
   {question_id: 14, isCorrect: false, answer: 'Тюмень: история и нефть'},
   {question_id: 14, isCorrect: false, answer: 'Нефтяные приключения Тюмени'},

   {question_id: 15, isCorrect: false, answer: 'Опорные'},
   {question_id: 15, isCorrect: true, answer: 'Гидрохимические'},
   {question_id: 15, isCorrect: false, answer: 'Параметрические'},
   {question_id: 15, isCorrect: false, answer: 'Поисковые'},
   {question_id: 15, isCorrect: false, answer: 'Разведочные'},
   {question_id: 15, isCorrect: false, answer: 'Эксплуатационные'},
   {question_id: 15, isCorrect: false, answer: 'Нагнетательные'},

   {question_id: 16, isCorrect: true, answer: 'океаническая'},
   {question_id: 16, isCorrect: false, answer: 'осадочно-миграционная'},
   {question_id: 16, isCorrect: false, answer: 'карбидная'},
   {question_id: 16, isCorrect: false, answer: 'вулканическая'},
   {question_id: 16, isCorrect: false, answer: 'космическая'},
   {question_id: 16, isCorrect: false, answer: 'магматическая'},

   {question_id: 17, isCorrect: false, answer: 'литологическая'},
   {question_id: 17, isCorrect: false, answer: 'тектоническая'},
   {question_id: 17, isCorrect: false, answer: 'стратиграфическая'},
   {question_id: 17, isCorrect: true, answer: 'симметричная'},
   {question_id: 17, isCorrect: false, answer: 'структурная (сводовая)'},

   {question_id: 18, isCorrect: false, answer: 'песколовка'},
   {question_id: 18, isCorrect: false, answer: 'нефтеловушка'},
   {question_id: 18, isCorrect: false, answer: 'илонакопитель'},
   {question_id: 18, isCorrect: true, answer: 'газоуловитель'},

   {question_id: 19, isCorrect: false, answer: 'Западно-Сибирская'},
   {question_id: 19, isCorrect: false, answer: 'Тимано-Печорская'},
   {question_id: 19, isCorrect: false, answer: 'Охотская'},
   {question_id: 19, isCorrect: true, answer: 'Кузнецкая'},
   
   {question_id: 20, isCorrect: true, answer: 'тру'},
   {question_id: 20, isCorrect: false, answer: 'не тру'},
   {question_id: 20, isCorrect: false, answer: 'не тру'},
   {question_id: 21, isCorrect: false, answer: 'не тру'},
   {question_id: 21, isCorrect: false, answer: 'не тру'},
   {question_id: 21, isCorrect: true, answer: 'тру'},


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
