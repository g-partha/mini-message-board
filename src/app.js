const express = require('express');
const path = require('node:path');
const app = express();
const indexRouter = require('./routers/indexRouter');
const newRouter = require('./routers/newRouter');
const messageRouter = require('./routers/messageRouter.js');
const port = process.env.PORT;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/message', messageRouter);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
