exports.action = function(data, callback, config, SARAH) {

	// Verify config
	config = config.modules.controleMPD;
	
	var net = require('net');
	var os = require('os');	

	var host = config.serveur1;
	var port = config.port1;
	
	var systeme = os.platform();
	
	//gestion du multiroom
	if (data.piece !="")
	{
		switch (data.piece) 
		{
			case "1":		//reprendre config.Piece_1
				
				var host = config.serveur1;
				var port = config.port1;
			break;

			case "2":		//reprendre config.Piece_2
				
				var host = config.serveur2;
				var port = config.port2;
			break;
			
			case "3":		//reprendre config.Piece_3
				
				var host = config.serveur3;
				var port = config.port3;
			break;
			
			case "4":		//reprendre config.Piece_4
				
				var host = config.serveur4;
				var port = config.port4;
			break;
		}
	}
	
	
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

				case "maj":
					
					var piece = "config.Piece_1";
					var serveur = new Array();

					serveur[0] = config.Nb_serv;
					for(var i = 1 ; i <= config.Nb_serv ; i++)
					{
						piece = "config.Piece_"+i;
						serveur[i] = eval(piece);
					}
					update(data.directory, serveur);
					
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

				case "maj":
					
					var piece = "config.Piece_1";
					var serveur = new Array();

					serveur[0] = config.Nb_serv;
					for(var i = 1 ; i <= config.Nb_serv ; i++)
					{
						piece = "config.Piece_"+i;
						serveur[i] = eval(piece);
					}
					update(data.directory, serveur);
					
				break;
				
			};
		break;
		
	}
	
  console.log("FAIT");
	callback({});
}

  // ------------------------------------------
  //  UPDATING XML
  // ------------------------------------------

var update = function(directory, serv_MPD)
{
  
  var fs   = require('fs');
  var file = directory + '/../plugins/controleMPD/controleMPD.xml';
  var xml  = fs.readFileSync(file,'utf8');
  
  var nombre_serveur = serv_MPD[0];
  
  var replace  = '§ -->\n';
      replace += '	<item repeat="0-1">\n';
	  replace += '		<one-of>\n';
  for(var i = 1 ; i <= nombre_serveur ; i++)
  {
	  var lieu =       replace += '			<item>'+serv_MPD[i]+'<tag>out.action.piece="'+i+'";</tag></item>\n';
  }
      replace += '		</one-of>\n';
      replace += '	</item>\n';
      replace += '	<!-- §';
  
  var regexp = new RegExp('§[^§]+§','gm');
  var xml    = xml.replace(regexp,replace);
  
  fs.writeFileSync(file, xml, 'utf8');
}
  

