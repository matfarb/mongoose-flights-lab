const Flight = require('../models/flight');
const Destination = require('../models/destination').modelName;
const Ticket = require('../models/ticket').modelName;

function getAll(req, res) {
    Flight.find({}, function(err, flights){
        const sortFlights = flights.slice().sort((a, b) => a.departs - b.departs);
        res.render('flights/index', {sortFlights});
    });
}

function newFlights(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', {departsDate});
}

function create(req, res) {
    const flight = new Flight(req.body);
    
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('error', {message: 'Something went wrong.', error: err});
      console.log(flight);
      res.redirect('/');
    });
}

async function show(req, res) {
    const flight = Flight.findById(req.params.id)
    await Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render('flights/show', {flight: flight, tickets});
        });
    });
}


function deleteFlight(req, res){
    const id = {_id: req.params.id};
    Flight.findOneAndDelete(id, function(err) {
        if (!err) {
            res.redirect('/flights');
        }
        else {
            message.type = 'error';
        }
    });
}


module.exports = {
    getAll,
    new: newFlights,
    create,
    show,
    delete: deleteFlight
}