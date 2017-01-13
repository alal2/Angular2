// var flight = require('./flight');

// flight.setOrigin('Delhi');
// flight.setDestination('Patna');
// flight.setNumber(656);

// console.log(flight.getInfo());

//-------------------------------------------------------------
var flight = require('./flight');

var indigo ={
	number:647,
	origin:'Delhi',
	destination:'Patna'
};

var del =flight(indigo);
del.triggerDepart();
console.log(del.getInformation());

var goair ={
	number:322,
	origin:'Kolkata',
	destination:'Mumbai'
};
var kol=flight(goair);
console.log(kol.getInformation());
console.log(del.getInformation());
 

