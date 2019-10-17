Rapport du Sprint 2




Introduction 

Green-R vise à informer la population sur la qualité de l’air en temps réel à différents points stratégique (école, commune, centre sportif, parc,...). 
Nous verrons ensemble les étapes réalisées durant ce sprint et où nous en sommes tant par rapport au début qu’à notre objectif final.

Avancement

Étapes réalisées durant le sprint. 

Déploiement de MySQL Server & Apache-PHP
Afin de pouvoir fournir ces 3 services, nous utilisons un VPS avec docker installé dessus. Ainsi, nous avons conçu des containers pour chaque service car nous ne souhaitions pas mélanger le tout. De plus, cela assure une meilleure sécurité de nos services (en cas de crash d’un des services, les autres restent disponibles). Nous avons également installé un système de monitoring pour pouvoir s’assurer le bon fonctionnement de notre système et de vite situer un problème.

Pour le côté de développement du site web, nous avons mis en place un service sftp pour chaque membre du projet. Ainsi toutes les modifications sont directement visible sur le site web.

Mise en place Schéma DB
Cette partie a été la plus dur, dans le sens ou notre DB doit respecter les différentes contraintes et assurer l’intégralité des données à tout moment. De plus, elle doit être performante afin d’assurer la synchronisation avec le boitier, le site web et l’application mobile.

La création du schéma de la DB est déja disponible sur notre Github.


Création et choix du template pour le site vitrine

Le choix du template a été réalisé assez rapidement. Nous avons voulu un template à la fois sobre, mais également en rapport avec notre charte graphique.
	Nous avons décidé de prendre le template à cette adresse:
	https://templatemo.com/

Remplissage du site WEB avec les informations importantes du projet : 
Nous avons rédigé les différentes zones de texte de notre site WEB: 

Une brève présent	ation de notre projet ainsi que nos attentes vis à vis des entités profitant du produit.
 
Un exemple de graphique que nous mettons à disposition (le graphique actuel est réalisé avec des valeurs fictives, n’ayant pas encore notre capteur de CO2 nous ne pouvons pas encore donner de vraie valeur). 

Un aperçu des membres du groupe. 

Des questions types qui pourraient être posées par nos futurs clients et ainsi répondre facilement à ces questions possiblement récurrentes. Mais aussi, un bouton pour commander notre produit et accéder au formulaire de commande.

Nous avons inclu une carte avec la position de notre “siège” actuel ainsi qu’un formulaire permettant de nous contacter.


Création et choix du Logo :
Nous avons opté pour un logo simple et épuré dans le but de ne pas choquer nos visiteurs lors de leurs visites sur notre site les mettant ainsi dans un état de sérénité. Nous montrons ainsi que nous montrons tout ce que nous faisons et gagnons la confiance des personnes visiteurs.


Envoie des données vers la DB (elec)
Après plusieurs essaies sur différents modules WiFi, nous avons opté pour l’arduino Wemos D1 qui possède une puce intégré.

Nous avons d'abords essayé d’envoyer les données via le module WiFi ESP8266 communiquant avec le WiFi via des commandes AT, mais cette technologie ne nous permettait pas d’envoyer de manière simple et sûr les données des différents capteurs vers la base de données.
Nous avons alors essayé d’envoyer les données vers une API, thingspeak.com qui permet de recevoir et afficher les données de capteurs de manière simple. L’envoi de données fonctionnait mais sur le site, seulement une partie des données envoyées étaient affichée. Ne ne pouvons donc pas prendre cette outil.

Nous avons donc essayé l’arduino Wemos D1 qui possède une puce WiFi intégré au système.
Il utilise la bibliothèque “ESP8266WiFi.h” directement disponible dans le programme Arduino. Cette bibliothèque facilite grandement l’envoie de données vers une base de données. 
L’envoi de données fonctionne avec cette technologie. Nous attendons les autres capteurs qui doivent encore arriver.



Étapes toujours en cours de réalisation à la fin de sprint.


Réalisation de l’app mobile

Divers problèmes avec Android Studio nous ont enjoint à découvrir une alternative, React Native.

C’est pourquoi nous travaillons simultanément sur deux versions de l’application:  en java sur Android Studio et l’autre en javascript avec le framework React Native (pour laquelle le résultat visuel lors du développement se fait avec l’application Expo).

L’avantage de React Native étant sa compatibilité avec IoS & Android nous pensons à transiter totalement vers cette solution lors du prochain sprint.

Pour ce qui est de l’application actuelle, elle a été développée sous android studio avec java comme langage de programmation.

Pour ce deuxième sprint, le but était de fournir un écran simple avec une map sur laquelle pouvaient être visible les endroits où se trouvaient les boîtiers.
Il fallait aussi que l’utilisateur puisse voir les données relative à un boîtier qu’il aurait sélectionner.
Pour le moment la map est intégrée ainsi que l’espace pour les données mais nous n’avons pas fini de mettre en place la communication avec la base de données.

Pour l’instant, les informations visibles sont hardcodées dans l’application ainsi que le marqueur sur la map.

Nous avons déjà réalisé la partie php qui récupère les données,sous format Json, dans la base de données mais nous n’avons pas encore programmé la partie en java pour récupérer les données de la partie php grâce à une requête http.


Map SDK de google a été choisi pour pouvoir afficher la positions des différents capteur sur une carte visible dans l’application.



Explications de ce qui nous reste à mettre en place.

Récupérer les données de la DB et afficher sur l’app mobile 
Comme expliqué au dessus il nous reste à mettre en place la récupération des données par l’application en java.
Nous avons perdu du temps avec l’implémentation de la map dans l’application qui nous a empêché de finir de mettre en place cette partie.


Prise de contact avec école/commune
Nous n’avons pas encore pris contact avec les entités cibles car nous souhaitons pouvoir présenter quelque chose de concret. Nous souhaitons d’abord être sûr que notre capteur fonctionne avant de proposer quelque chose de trop peu précis et qui par conséquent rendrait nos données inutilisables. 


Mise en place module GPS arduino 

	Due à un mauvais fonctionnement du module GPS, nous devons 
	renvoyer celui-ci auprès d’Amazon et en choisir un autre qui devrait arriver pour le prochain sprint.

Réflection sur une solution “eco-friendly” pour la consommation du prototype

	Nous pensons à installer un panneau solaire qui pourrait ainsi alimenter notre produit de façon autonome sans devoir le relier sur secteur ou devoir mettre une pile à l’intérieur. 




Conclusion du Sprint 

Nous Avons rencontré quelque problème avec les capteurs et avec l’application android qui nous ont pas permi d’atteindre nos objectifs sur certains points.
Néanmoins, nous possédons maintenant notre site web et le début de notre application mobile.Nous pouvons donc pour le prochain sprint nous occuper de traiter les données, les afficher sur le site web et l’application mobile.
Pour l’application mobile, nous avons pris un peu de retard à force d’hésiter sur ce que nous allions faire et le résultat pour ce sprint ne nous satisfait donc pas complètement.

Grâce à ce que nous avons réalisé jusqu'à durant ce sprint, nous allons pouvoir aller à la rencontre d’école et de commune pour avoir leurs avis et leurs idées d’amélioration.

Nous sommes aussi conscient que pour le prochain sprint, les users story dans le trello doivent être mieux décrites et qu’il faut enlever toutes les tâches et ne laisser que ce qui a de l’importance pour le client.C’est un point de la gestion sur lequel nous devons encore nous améliorer.

Dans l’ensemble, ce sprint c’est bien passé. Nous pourrons entamer le suivant sur de bonnes bases en prenant en compte le retour que chacun fera ce jeudi durant le sprint retrospective de l’équipe.
