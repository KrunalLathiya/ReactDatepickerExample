const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DateModel = new Schema({
  sDate: {
    type: Date
  },
},{
    collection: 'dates'
});

module.exports = mongoose.model('DateModel', DateModel);