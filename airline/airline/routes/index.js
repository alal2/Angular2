
/*
 * GET home page.
 */
var flightData = require('../data');
var flight = require('../flight');

// var flight1 = flight({
//   number:1,
//   origin:'LAX',
//   destination:'DCA',
//   departs:'9AM',
//   arrives:'4PM'
// });

// var flight2 = flight({
//   number:2,
//   origin:'LAX',
//   destination:'PDX',
//   departs:'10AM',
//   arrives:'12PM'
// });

for(var number in flightData){
  flightData[number]=flight(flightData[number]);
};

exports.flight = function(req, res){
  var number =req.param('number');
  if(typeof flightData[number]==='undefined'){
    res.status(404).json({status:'error'})
  }else {
   res.json(flightData[number].getInformation());
  };
};
exports.arrived = function(req, res){
  var number =req.param('number');
  if(typeof flightData[number]==='undefined'){
    res.status(404).json({status:'error'})
  }else {
    flightData[number].triggerArrive();
   res.json({status:'done'});
  };
};

