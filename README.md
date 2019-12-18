# Projet d'intégration : GreenR  ![marker](https://github.com/David-Aires/GreenR/blob/master/App%20Mobile/assets/airbox_icon.png?raw=true)

GreenR est un projet qui consiste a sensibiliser les personnes à la qualité de l'air qu'il respire et surtout en sa concentration en CO2.
Pour cela nous avons mis au point un boîtier contenant un capteur de CO2, un de température et un d'humidité ainsi qu'un module gps capable d'envoyer des données a une base de données.  
Une API en libre service sur notre [site](https://green-r.be/index.php) permet de récupérer les données librement.
Nous l'utilisons pour afficher la position des capteurs sur notre site et sur notre application mobile.


## Rôles dans le groupe
* **Scrum master :** Tongres Cyril (change à chaque sprint)
* **Product owner :** David Aires

## Test de l'application  

Pour l'instant, il est possible de tester l'application en passant par EXPO (phase de développement oblige) ou par un APK pour android.    
1.télécharger node js sur votre PC et récupérer le dossier app mobile sur le github.   
2.créer un projet react native (soit dans un IDE qui le permet soit en utilisant expo en ligne de commande).  
3.copier le contenu de app mobile dans votre projet react native.  
4.installer tous les modules compris dans https://github.com/David-Aires/GreenR/blob/master/App%20Mobile/package.json (plus facile en ligne de commande).  
5.créer un compte sur https://expo.io/ et télécharger l'application sur votre smartphone.  
6.en ligne de commande allez dans le dossier de votre projet et faites la commande *expo start* le projet va s'initialiser et un code QR va être créé.  
7.Scanner le code QR avec l'application expo sur votre smartphone pour la lancer.  

APK :

1.télécharger l'APK [ici](https://expo.io/artifacts/d7a2f4b5-9a75-4cb3-a482-9ec789c0b784).  
2.passer votre smartphone android en mode développeur et activer le debugging USB.  
3.brancher votre smartphone a votre ordinateur et transférer le fichier .APK télécharger en étape1.  
4.Dans votre smartphone soit lancer le fichier APK.  
5.Celui-ci va s'installer et va vous mettre des warnings car vous installer un apk qui ne se trouve pas sur le google store, vous pouvez les passer.  
6.Lancer l'application.  

### Bug  

* Vérifiez que votre smartphone est sur le même réseau que votre ordinateur(Passer par un Tunnel si cela ne fonctionne toujours pas).  
* Vérifiez que votre pare-feu est désactivé.  
* Vérifiez que vous avez installé les bons packages dans la bonne version.
* Il existe des forums d'aide pour tous les packages.

Vous pouvez rapporter vos problèmes [ici](https://github.com/David-Aires/GreenR/issues) pour recevoir de l'aide.  
Indiquez votre problème ainsi que le message d'erreur et le contenu de votre fichier package.json

## Site

Sur notre [site](https://green-r.be/include/assistance.php) vous pouvez trouver:
* les informations sur le projet.  
* les données et l'emplacement des boîtiers [ici](https://green-r.be/app/html/tracking.html).  
* L'[API](https://green-r.be/api/stats.php) pour utiliser les données et les récupérer librement.  
* Une zone pour [commander](https://green-r.be/include/commande.php) un boîtier.  


## Information  

Le projet a été réalisé en appliquant la méthode Scrum.
Les rapports à la fin de chaque sprint sont disponibles [ici](https://github.com/David-Aires/GreenR/tree/master/Rapport)
Différentes informations sont disponibles sur le [wiki](https://github.com/David-Aires/GreenR/wiki) du projet. 

Après de nombreuses tentatives, le boitier ressemble à celui-ci (voir photo ci-dessous). 

![Box Green-R](https://github.com/David-Aires/GreenR/blob/master/%C3%89lectronique/Mod%C3%A9lisation%20Capteur.png)
 
*Il se pourrait que le boitier évolue grâce aux améliorations qu'on risquerait d'apporter*
## Contributeurs  
* Aires David
* Allard Renaud
* Azzouz Souhaib
* Lebrun Quentin
* Tongres Cyril
* Vanden Herrewegen Guillaume.  
  

### Liens Utiles au Projet

* [Site Web](https://green-r.be/)
* [GitHub](https://github.com/David-Aires/GreenR)
* [Moodle](https://moodle.ephec.be/mod/wiki/view.php?pageid=55)
* [Rapport](https://github.com/David-Aires/GreenR/wiki/Rapport)
* [Timesheet](https://clockify.me/timesheet)
* [Trello Users Stories](https://trello.com/b/xrhGKjh3/general-users-stories)
* [Trello Sprint 1](https://trello.com/b/E09Ck4QA/users-stories-sprint-1)
* [Trello Sprint 2](https://trello.com/b/QS7FNlb7/users-stories-sprint-2-%F0%9F%94%A5-03-10-19-17-10-19)
* [Trello sprint 3](https://trello.com/b/TvGCWNP1/users-stories-sprint-3-%F0%9F%94%A5-17-10-19-07-11-19)
* [Trello sprint 4](https://trello.com/b/yyREMzHD/users-stories-sprint-4-%F0%9F%94%A5-07-11-19-21-11-19)
* [Trello sprint 5](https://trello.com/b/Jis7h31Y/users-stories-sprint-5-%F0%9F%94%A5-21-11-19-05-12-19)
* [WIKI](https://github.com/David-Aires/GreenR/wiki)
  
---------------------------------
*Ce projet a été réalisé dans le cadre du Projet d'Intégration en 3éme BAC à [l'Ephec](https://www.ephec.be/),*
*Entre Septembre et Décembre 2019, dans la section Technologie de l'Informatique.*
