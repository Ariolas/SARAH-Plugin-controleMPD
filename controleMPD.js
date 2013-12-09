exports.action = function(data, callback, config, SARAH) {

	// Verify config
	config = config.modules.controleMPD;
	var net = require('net');
	var host = config.serveur;
	var port = config.port;
  

	//commandes
	switch (data.commande) {
		case "next":
		
			var exec = require("child_process").exec;
			var requete = ".\\plugins\\controleMPD\\bin\\mpc -h "+ host +" -p "+ port +" next";
			
			exec(requete, function (error, stdout, stderr) {

			});
		break;
		
		case "prev":
		
			var exec = require("child_process").exec;
			var requete = ".\\plugins\\controleMPD\\bin\\mpc -h "+ host +" -p "+ port +" prev";
			
			exec(requete, function (error, stdout, stderr) {
			
			});
		break;
		
		case "pause":
		
			var exec = require("child_process").exec;
			var requete = ".\\plugins\\controleMPD\\bin\\mpc -h "+ host +" -p "+ port +" pause";
			
			exec(requete, function (error, stdout, stderr) {
			
			});
		break;
		
		case "play":

			var exec = require("child_process").exec;
			var requete = ".\\plugins\\controleMPD\\bin\\mpc -h "+ host +" -p "+ port +" play";
			
			exec(requete, function (error, stdout, stderr) {
			
			});
		break;
		
		case "stop":

			var exec = require("child_process").exec;
			var requete = ".\\plugins\\controleMPD\\bin\\mpc -h "+ host +" -p "+ port +" stop";
			
			exec(requete, function (error, stdout, stderr) {
			
			});

		break;
		
		case "monteson":
			
			var exec = require("child_process").exec;
			var requete = ".\\plugins\\controleMPD\\bin\\mpc -h "+ host +" -p "+ port +" volume +15";
		
			exec(requete, function (error, stdout, stderr) {
				
			});
			
		break;
		
		case "montebeaucoupson":
			
			var exec = require("child_process").exec;
			var requete = ".\\plugins\\controleMPD\\bin\\mpc -h "+ host +" -p "+ port +" volume +50";
		
			exec(requete, function (error, stdout, stderr) {
				
			});
			
		break;
		
		case "baisseson":
			
			var exec = require("child_process").exec;
			var requete = ".\\plugins\\controleMPD\\bin\\mpc -h "+ host +" -p "+ port +" volume -15";
		
			exec(requete, function (error, stdout, stderr) {
				
			});
			
		break;
		
		case "baissebeaucoupson":
			
			var exec = require("child_process").exec;
			var requete = ".\\plugins\\controleMPD\\bin\\mpc -h "+ host +" -p "+ port +" volume -50";
		
			exec(requete, function (error, stdout, stderr) {
				
			});
			
		break;

		case "currentsong":
			
			var exec = require("child_process").exec;
			var requete = ".\\plugins\\controleMPD\\bin\\mpc -h "+ host +" -p "+ port +" current";
		
			exec(requete, function (error, stdout, stderr) {
				reponse = stdout;
				console.log(reponse);
				callback({'tts' : "La musique en lecture est "+reponse});
			});
			
		break;		
		
	};
	
	callback({});
}

