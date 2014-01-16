exports.action = function(data, callback, config, SARAH) {

	// Verify config
	config = config.modules.controleMPD;
	
	var net = require('net');
	var os = require('os');	

	var host = config.serveur1;
	var port = config.port1;
	
	var systeme = os.platform();
	
	/* Futur gestion du multiroom
	if (data.piece !="")
	{
		switch (data.piece) 
		{
			case "salon":		//reprendre config.Piece1
				
				var host = config.serveur1;
				var port = config.port1;
			break;

			case "chambre":		//reprendre config.Piece2
				
				var host = config.serveur2;
				var port = config.port2;
			break;
		}
	}
	*/
	
	switch (systeme)
	{
		case "linux":
			switch (data.commande) 
			{
				case "next":
				
					var exec = require("child_process").exec;
					var requete = "mpc -h "+ host +" -p "+ port +" next";
								
					exec(requete, function (error, stdout, stderr) {

					});
				break;
				
				case "prev":
				
					var exec = require("child_process").exec;
					var requete = "mpc -h "+ host +" -p "+ port +" prev";
					
					exec(requete, function (error, stdout, stderr) {
					
					});
				break;
				
				case "pause":
				
					var exec = require("child_process").exec;
					var requete = "mpc -h "+ host +" -p "+ port +" pause";
					
					exec(requete, function (error, stdout, stderr) {
					
					});
				break;
				
				case "play":

					var exec = require("child_process").exec;
					var requete = "mpc -h "+ host +" -p "+ port +" play";
					
					exec(requete, function (error, stdout, stderr) {
					
					});
				break;
				
				case "stop":

					var exec = require("child_process").exec;
					var requete = "mpc -h "+ host +" -p "+ port +" stop";
					
					exec(requete, function (error, stdout, stderr) {
					
					});

				break;
				
				case "monteson":
					
					var exec = require("child_process").exec;
					var requete = "mpc -h "+ host +" -p "+ port +" volume +15";
				
					exec(requete, function (error, stdout, stderr) {
						
					});
					
				break;
				
				case "montebeaucoupson":
					
					var exec = require("child_process").exec;
					var requete = "mpc -h "+ host +" -p "+ port +" volume +50";
				
					exec(requete, function (error, stdout, stderr) {
						
					});
					
				break;
				
				case "baisseson":
					
					var exec = require("child_process").exec;
					var requete = "mpc -h "+ host +" -p "+ port +" volume -15";
				
					exec(requete, function (error, stdout, stderr) {
						
					});
					
				break;
				
				case "baissebeaucoupson":
					
					var exec = require("child_process").exec;
					var requete = "mpc -h "+ host +" -p "+ port +" volume -50";
				
					exec(requete, function (error, stdout, stderr) {
						
					});
					
				break;

				case "currentsong":
					
					var exec = require("child_process").exec;
					var requete = "mpc -h "+ host +" -p "+ port +" current";
				
					exec(requete, function (error, stdout, stderr) {
						reponse = stdout;
						console.log(reponse);
						callback({'tts' : "La musique en lecture est "+reponse});
					});
					
				break;		
				
			};
		break;

		case "win32":
			switch (data.commande) 
			{
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
		break;
		
	}
	
  console.log("FAIT");
	callback({});
}

