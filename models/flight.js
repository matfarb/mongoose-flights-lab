const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = require('./destination').destinationSchema;

const ticketSchema = require('./ticket').ticketSchema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        default: 'American'
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: () => Date.now() + 7*24*60*60*1000
    },
    destination: [destinationSchema]
  });

  module.exports = mongoose.model('Flight', flightSchema);