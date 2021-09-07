const Flight = require('../models/flight');
const Ticket = require('../models/ticket').modelName;

async function newTickets(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/ticket', {flight});
}

async function create(req, res) {
    console.log(req.params.id)
    let newTicket = new Ticket({
        //  flight: req.params.id = requesting the id of the flight to associate the ticket to the flight this grabs the id that is present in the url
        // only one id is in the url from the current flight that I have clicked on for details
        flight: req.params.id,
        seat: req.body.seat,
        price: req.body.price,
    })
    await newTicket.save()
    res.redirect(`/flights/${req.params.id}`)
}

module.exports = {
    new: newTickets,
    create
}