const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt');
const generateTokens = require('../../utils/authUtils');
const cookiesConfig = require('../../middleware/cookiesConfig');
const configJWT = require('../../middleware/jwtConfig');
const {User} = require('../../db/models');


router.post('/sign-up', async (req, res) => {
  try {
    console.log('-------------');
    const { name, email, password} = req.body;

    if (name && email && password) {
      const globalRegex =
        /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;

      if (globalRegex.test(email)) {
        let user = await User.findOne({ where: { email } });
        if (user) {
          res
            .status(400)
            .json({ message: 'Такой пользователь уже существует' });
        } else {
          const hash = await bcrypt.hash(password, 10);
          user = await User.create({
            name,
            email,
            password: hash,
          });
          const { accessToken, refreshToken } = generateTokens({
            user: { name: user.name, id: user.id},
          });
          res.cookie(cookiesConfig.access, accessToken, {
            maxAge: cookiesConfig.maxAgeAccess,
            httpOnly: true,
          });
          res.cookie(cookiesConfig.refresh, refreshToken, {
            maxAge: cookiesConfig.maxAgeRefresh,
            httpOnly: true,
          });
          res.status(201).json({
            message: 'success',
            user,
          });
        }
      } else {
        res
          .status(400)
          .json({ message: 'Ваша почта не соответствует формату' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({message}) {
    res.status(500).json({message})
  }
})

module.exports = router