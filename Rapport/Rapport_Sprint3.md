# Rapport du Sprint 3

## Introduction

Green-R vise à informer la population sur la qualité de l’air en temps réel à différents points stratégique (école, commune, centre sportif, parc,...). 
Nous verrons ensemble les étapes réalisées durant ce sprint et où nous en sommes tant par rapport au début qu’à notre objectif final.

## Avancement

## Étapes réalisées durant le sprint. 

Récupération des données via le site web ou une api.
Nous avons créé une API qui permet sur base de requêtes ULR d'afficher au format JSON les données de nos différentes mesures. Une page de tutoriel a également été créé pour pouvoir comprendre comment réaliser les différentes requêtes possibles. Nous avons réfléchis à quelles requêtes étaient nécessaires afin de pouvoir afficher les données pour un utilisateur externe à notre projet, mais également pour l'affichage des données sur l'application web et l'application mobile. L'API se base sur une page en php qui va se connecter à notre base de données et réaliser différentes requêtes SQL en fonction des paramètres rentrés dans l'URL. Nous avons également sécurisé l'API afin d'empêcher toute transaction dans notre base de données.
La page de l’API est accessible depuis la page “données” puis dans le menu, “API” : https://green-r.be/api/stats.php .

Récupérer le taux de CO2 depuis le boîtier.
Le capteur que nous avons décidé de prendre est le MG-811. Après une rapide prise en main, nous l’avons intégré au prototype comprenant les autres capteurs. 









Visualiser les données, températures, sur une page du site web.
Nous avons ajouté 3 nouveaux onglets qui permettent d’accéder à des pages dédiées pour chaques données prises (Température, Humidité, Taux CO2). Afin de faciliter l’accès rapide aux données à l’utilisateur, ces 3 pages possèdent la même structure :
Un graphique en ligne pour visualiser les pics
Un graphique radar pour visualiser l’évolution
Un formulaire de calendrier pour pouvoir sélectionner un écart de temps (des dates) pour lesquelles on souhaite visualiser les données
Un tableau reprenant les données de mesures et la position de la Box
Une map afin de visualiser la position de la box
Une animation différente pour chaque mesure reprenant la dernière mesure prise par la box ce jour

De plus, dans la page d’humidité, il y a un espace dédié à la probabilité qui se base sur l’humidité et la température pour savoir s’il existe un risque de pluie, neige, verglas,... La page du taux de CO2 comprend également un tableau indiquant les taux nocifs pour la santé.

## Étapes toujours en cours de réalisation à la fin de sprint.

Naviguer entre les fenêtres de l’app via un menu.



Pour l’instant, nous avons ces trois pages :

La page Home, où l’on retrouve la barre de recherche ainsi que deux zones cliquables : 
une zone amenant à une page qui indiquera les AirBox proches 
une autre montrant les AirBox préférées de l’utilisateur
Une page Map qui aurait pour but de montrer la qualité de l’air moyen sur une zone donnée.
Une page Actu pour informer les utilisateurs des potentielles nouveautés de notre projet. 
Par exemple : nouvel emplacement d’AirBox, amélioration du produit, accord avec un client important,... 

Localiser les différents boîtiers Green-R sur la carte de l’app mobile.

Comme sur notre site web, les emplacements des AirBox sont indiqués par une feuille verte. Pour l’instant leur localisation n’est pas dynamique. 



Transporter facilement le boitier. 
Le boîtier en lui même ne se déplacera pas énormément lors de son fonctionnement. Lorsque l’on parle de transport, c’est au niveau de la mise en place du boîtier et des déplacements entre les différents endroits. Le boîtier se veut discret et donc il faut trouver un moyen pour ne pas avoir énormément de câbles et de matériaux à prendre pour pouvoir l’installer sur le terrain. 



## Explications de ce qui nous reste à mettre en place.

Accéder rapidement aux données depuis le site web.
Cette partie comprend toutes les requêtes vers l’api afin de compléter les graphiques avec les données réelles et également les espaces dédiés à ces valeurs. De plus, elle permettra aussi d’automatiser l’affichage de la position des box sur la tracking map.


Charger le boîtier via un panneau solaire.
L’idée est de trouver un moyen pour que le panneau soit le plus écologique possible. Le premier moyen qui vient en tête est de rajouter un panneau solaire et donc diminuer la consommation électrique. Il faut donc, premièrement, trouver un moyen de rajouter une batterie dans le boîtier tout en économisant la place. Deuxièmement, trouver un panneau solaire qui permettrait d’éviter au maximum de recharger la batterie pour éviter au maximum de le faire via prise secteur et qui de plus pourra se placer sur le boîtier. Nous sommes donc sur un travail de recherches de ces différents composants.

Afficher les données des différents boîtiers dans l’application.
Il faut récupérer les données via l’api pour pouvoir afficher dynamiquement les boîtiers sur la carte, pouvoir récupérer les données de ces boîtiers et les afficher.


Accéder aux informations du projet via l’app mobile.
Ce n’était pas la priorité. Nous ajouterons un onglet menu “à propos” menant à notre page web.

## Changement de technologie :

Durant ce sprint, nous avons décidé de changer de technologie au niveau de l’application. Nous utilisons maintenant le framework React Native avec le template . 
Nous avons décidé de passer sur React Native car de nombreuses applications sont aujourd'hui développées à partir de ce framework. Il nous semblait aussi intéressant de mélanger nos connaissances en développement car React Native utilise du langage web mais en appliquant la structure de l'orienté objet. Le framework s'occupe de rendre le code compatible avec IOS et android ce qui évite de faire le développement pour les deux plateformes.
La contrepartie de ce changement est une perte de temps à apprendre ce framework et à refaire ce qui avait déjà été fait pour l'application en Java(Android Studio).


## Conclusion du Sprint 

Le projet avance bien. Nous arrivons tout doucement vers la phase finale du projet, c'est-à-dire à la réalisation d'un produit finale vendable. Nous avons cependant quelques retards au niveau de l'application mobile. Nous sommes aussi occupés à peaufiner les petits détails des choses réaliser et que nous pouvons améliorer et cherchons comment rendre notre boîtier plus “green”.

