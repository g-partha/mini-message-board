const express = require('express');
const { Router } = require('express');
const newRouter = Router();
const uuid = require('uuid');
const messages = require('../messages.js')
newRouter.get('/', (req, res) => {
  res.render('new');
});
newRouter.use(express.urlencoded({ extended: true }));
newRouter.post('/', (req, res) => {
  messages.push({ id: uuid.v4(), user: req.body.user, message: req.body.message, date: req.body.date });
  res.redirect('/');
})
module.exports = newRouter;
