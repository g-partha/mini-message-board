const uuid = require('uuid');
const messages = [
  {
    id: uuid.v4(),
    user: 'Partha',
    message: 'Hello',
    date: new Date()
  },
  {
    id: uuid.v4(),
    user: 'Doli',
    message: 'world',
    date: new Date()
  }
];
module.exports = messages;
