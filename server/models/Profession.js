const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const professionSchema = new Schema({
  professionOption: {
    type: String,
    // required: true,
  },
});

const Profession = model('Profession', professionSchema);

module.exports = Profession;
