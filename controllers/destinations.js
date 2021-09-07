const Flight = require('../models/flight');
const Destination = require('../models/destination').modelName;

function addDestination(req, res) {
    const destination = new Destination(req.body);
    
    destination.save(function(err) {
      // one way to handle errors
      if (err) return res.render('error', {message: 'Something went wrong.', error: err});
      console.log(destination);
      Flight.findOneAndUpdate({_id:req.params.id}, {$push:{'destination':destination}}, function(err){
        res.redirect(`./${req.params.id}`);
      })
    });
}

function deleteDestination(req, res){ 
    const id = {_id: req.params.id};
    
    Flight.findOneAndDelete(id, function(err) {
      if (!err) {
          res.redirect(`./${req.params.id}`);
      }
      else {
          message.type = 'error';
      }
  });
}

module.exports = {
    addDestination,
    delete: deleteDestination
}