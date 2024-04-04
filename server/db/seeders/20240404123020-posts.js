'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   const postsData = [
     {title:'post1 title', description:'post1 description', img: 'https://sun9-76.userapi.com/impg/uHW1gsm0-Gncys7zEGodU_ltLW4sIR0aSYCEuQ/JpOAk3Cdr1M.jpg?size=670x459&quality=96&sign=27ab352c5262360a83abc02584493360&type=album'},
     {title:'post2 title', description:'post2 description', img: 'https://medialeaks.ru/wp-content/uploads/2018/09/na-glavnuyu.jpg'},
   ]
  

  const posts = postsData.map((post) => ({
    ...post,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  await queryInterface.bulkInsert("Posts", posts);
},

async down(queryInterface) {
  await queryInterface.bulkDelete("Posts")
},
};
