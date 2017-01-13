var whisper = function(msg){
	console.log('proclaiming:' +msg);
};

exports.softly= whisper;

exports.loudly = function(msg){
	console.log('PROCLAIMING: '+ msg);
};