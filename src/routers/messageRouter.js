const { Router } = require('express');
const messageRouter = Router();
const messages = require('../messages.js');
messageRouter.get('/:id', (req, res) => {
  const message = messages.find(message => message.id === req.params.id);
  res.render('../views/message-detail.ejs', { message: message });
});
module.exports = messageRouter;
