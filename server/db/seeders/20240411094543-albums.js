'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Albums',
      [
        {
          img: 'https://img.freepik.com/premium-photo/oil-workers-work-field_73899-1356.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'https://s12.stc.yc.kpcdn.net/share/i/12/13424738/wr-960.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'https://cdn5.vedomosti.ru/crop/image/2023/71/15zbo6/original-1iep.jpg?height=606&width=1076',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'https://sitv.ru/upload/information_system_15/1/3/2/item_132449/item_132449.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'https://s15.stc.yc.kpcdn.net/share/i/12/13655036/wr-960.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'https://kurer-sreda.ru/static/records/9a35f8793dc446c2840918e25893a11e.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: 'https://polinka.top/uploads/posts/2023-05/1684802274_polinka-top-p-kartinki-neftyanikov-krasivo-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
