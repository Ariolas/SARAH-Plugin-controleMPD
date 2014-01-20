SARAH-Plugin-controleMPD
========================

Plugin de gestion de serveur MPD pour S.A.R.A.H

Vous permet de gerer un serveur MPD a la voix. Ce plugin utilise mpc pour envoyer ses commandes au serveur MPD.
Pour l'instant c'est assez basique, mais les ameliorations viendront par la suite

Liste des commandes disponibles :

_ musique suivante

_ change de musique

_ musique precedente

_ remet la musique d'avant

_ met en pause

_ reprise

_ arrete la musique

_ met la musique

_ monte le son

_ monte beaucoup le son

_ baisse le son

_ baisse beaucoup le son

_ quelle est cette musique (attention a la crise de fou rire avec les noms etrangers)

_ Met a jour les serveurs de musiques



La V2.0 apporte le suppor du multiroom :

L'un des interets de MPD est sa legerete, permettant d'en faire tourner plusieurs aisement sur une meme machine. Cela permet de faire du multiroom et d'envoyer sa musique partout.

Une fois vos differents serveurs MPD mis en place, voici la configuration a faire :
_ Ouvrir le champ de config

_ Entrer le nombre de serveurs actifs (4maxi sans avoir a mettre les mains dans le camboui)

_ Entrer le nom de la piece, l'adresse du serveur MPD et son port

_ Valider



_ Ensuite, il suffit de demander a Sarah "Met a jour les serveurs de musiques"

Normalement, "controleMPD.xml" se met automatiquement a jour avec les noms configures.

Il suffit de rajouter " dans le/la/l' " puis "le nom de la piece " apres votre requete. Si vous ne precisez pas, le serveur 1 est commande par defaut

Pour pouvoir gerer plus de 4 serveurs MPD :

_ Ajouter un serveur dans "controleMPD.prop" en recopiant la structure existante.

_ Ajouter le "case" correspondant dans le "controleMPD.js" en recopiant la strucutre existante.

_ Ensuite, redemarrer Sarah


Pour le support Linux, il est necessaire d'installer MPC sur le serveur hebergeant Sarah :

sudo apt-get install mpc


Todo


_ Gestion playlist

_ Avance/retour arriere de X minutes/secondes, X etant dicte par l'utilisateur

_ Gestion des sorties du serveur ?


pour contact :

_ Google+

_ damiengeen@hotmail.com


Source :

executable pour MPC : https://docs.google.com/file/d/0B9GNu6yI-oQkMGxWUFFCckptMzQ/edit
