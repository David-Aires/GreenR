Le MQ-135 est un capteur de diverse gaz. Il mesure la quantité de ceux-ci en ppm (particule par mètre cube).

Les différents gaz mesurables sont : 
* NH3,
* NOx,
* alcohol,
* Benzene,
* smoke,
* CO2.

Pour tester ce capteur, je me suis basé sur le code venant de https://projetsdiy.fr/mq135-mesure-qualite-air-polluant-arduino/.

Suivant les consignes de la fiche technique du produit (https://www.olimex.com/Products/Components/Sensors/Gas/SNS-MQ135/resources/SNS-MQ135.pdf), j'ai laissé le capteur "chauffer" pendant 24 heures.
J'ai ensuite calibré le catpeur car chaque capteur de ce fabricant nécessite un calibrage différent.

Après quelques manipulations, je suis arrivé à une valeur proche de la réalité concernant la quantité de CO2 par mètre cube.
J'ai alors fais quelques tests avec différents gaz.
J'ai testé avec du gaz de briquet (butane ou propane). Le capteur a bien réagit et un pique est observable sur une durée déterminée.
J'ai ensuite testé avec du CO2, gaz principal recherché dans notre projet, à l'aide d'une bougie (éteinte puis rapidement placée sous le capteur).
Cependant, le capteur n'a pas réagit, ni à la fumée, ni au CO2.

Nous ne pouvons donc pas utiliser ce capteur pour notre projet.
