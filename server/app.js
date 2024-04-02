require('@babel/register');
const express = require('express');
const config = require('./config/config');
const indexRouter = require('./routes/index.router');

const app = express();

const PORT = process.env.PORT ?? 4000;
config(app);
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
