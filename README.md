# Projet d'intégration : GreenR  

GreenR est un projet qui consiste a sensibiliser les personnes à la qualité de l'air qu'il respire et surtout en sa concentration en CO2.
Pour cela nous avons mis au point un boîtier avec un capteur de CO2,température,humidité et gps capable d'envoyer des données a une base de donnée.  
Une api en libre service sur notre [site](https://green-r.be/index.php) permet de récupérer les données librement.
Nous l'utilisons pour afficher la position des capteurs sur notre site et sur notre application.

## test de l'application  

Pour le moment, pour tester l'application il faut passer par des intermédiaires(phase de développement).    
1.télécharger node js et récupérer le dossier app mobile sur le github.   
2.créer un projet react native (soit dans un IDE qui le permet soit en utilisant expo en ligne de commande).  
3.copier le contenu de app mobile dans votre projet react native.  
4.installer tout les modules compris dans https://github.com/David-Aires/GreenR/blob/master/App%20Mobile/package.json (plus facile en ligne de commande).  

5.créer un compte sur https://expo.io/ et télécharger l'application sur votre smartphone.  
6.en ligne de commande aller dans le dossier de votre projet et faite la commande *expo start* le projet va s'initialiser et un code QR va être créer.  
7.Scanner le avec l'application expo sur votre smartphone et l'application devrait démarer si vous n'avez pas fait d'erreur.  

### Bug  

* Vérifier que votre smartphone est sur le même réseau que votre ordianteur.  
* Vérifier que votre pare-feu est désactivé (il peut poser probléme).  
* vérifier que vous avez instalé les bons packages dans la bonne version.
* Il existe des forums d'aide pour chaque packages.

Vous pouvez raporter vos problémes ici https://github.com/David-Aires/GreenR/issues pour potentiellement recevoir de l'aide.  
Indiquez votre probléme, le potentiel message d'erreur si possible et le contenu de votre fichier package.json

## Site

sur notre [site](https://green-r.be/include/assistance.php) vous pouvez trouvez:
* les informations sur le projets.  
* les données et l'emplacement des boîtiers [ici](https://green-r.be/app/html/tracking.html).  
* L'[API](https://green-r.be/api/stats.php) pour utiliser les données et les récupérer librement.  
* Une zone pour [commander](https://green-r.be/include/commande.php) un boîtier.  
