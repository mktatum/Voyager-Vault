const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name: { type: String, required: true },
    capital: { type: String },
    population: { type: Number },
    flag: { type: String } 
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;