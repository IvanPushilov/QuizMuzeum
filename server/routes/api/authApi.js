const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt');
const generateTokens = require('../../utils/authUtils');
const cookiesConfig = require('../../middleware/cookiesConfig');
const configJWT = require('../../middleware/jwtConfig');
const {User} = require('../../db/models');


router.post('/sign-up', async (req, res) => {
  try {
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
            img: '/profileImg/user.png',
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
router.post('/sign-in', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        const { accessToken, refreshToken } = generateTokens({
          user: { email: email, id: user.id, role: user.role },
        });

        res.cookie(cookiesConfig.access, accessToken, {
          maxAge: cookiesConfig.maxAgeAccess,
          httpOnly: true,
        });
        res.cookie(cookiesConfig.refresh, refreshToken, {
          maxAge: cookiesConfig.maxAgeRefresh,
          httpOnly: true,
        });
        res.status(200).json({ message: 'success', user });
      } else {
        res.status(400).json({ message: 'логин или пароль не верный' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/check', async (req, res) => {
  if (res.locals.user) {
    const user = await User.findOne({
      where: { id: res.locals.user.id },
      attributes: { exclude: ['password'] },
    });
    res.json({ user });
    return;
  }
  res.json({ user: null });
});

router.get('/logout', (req, res) => {
  res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
  res.json({ message: 'success' });
});


module.exports = router