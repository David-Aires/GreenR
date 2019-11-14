## Rapport fonctionnement du boitier

# But 
Le but de ce rapport est de connaitre le fonctionnement de la partie électronique du projet Green-R et de connaitre chaque composants utilisés et leur utilité. 
# Matériel 
-	Wemos D1(carte de développement), microcontrôleur 
-	DHT11, capteur d’humidité et température
-	MG811, capteur de CO2
-	NEO-6 GY-GPS6MV2, module GPS
-	2 Diodes, led
-	2 Résistances, 470 Ohm

# Fonctionnement
Les données sont captées via les différents capteurs le MG811 (CO2) et le DHT11 (humidité et température) qui sont câblés sur le microcontrôleur. 

Le microcontrôleur va alors réceptionner ces données et les mettra dans des querys qui sont préconstruits, il les enverra ensuite vers la base de données via une bibliothèque spécifique. 

Le module GPS est lui aussi câblés sur le microcontrôleur mais quant à lui il reçoit et émet des données et cela se fait via RX/TX. 

Les leds et les résistances sont elles aussi câblées sur le microcontrôleur. Les leds ne reçoivent pas et émettent pas réellement de données, une led rouge sera allumée pour savoir si le boitier fonctionne et une autre s’allumera quand il y aura un disfonctionnement du boîtier. Les résistances sont quant à elles juste câblées via le microcontrôleur et effectuent leur rôle de résistance. 

# Consommation 
Le Wemos D1 a une consommation très basse lorsqu’il est en mode sleep (statut dans lequel il sera la plupart du temps), mais il peut atteindre 500mA lorsqu’il est actif avec la transmission de données WiFi. 
Le DHT11 ne consomme rien durant sa phase de repos, mais il consomme durant sa phase de réception de données 2.5mA que lorsqu’il captera des mesures. 
Le MG811 ne consomme rien durant sa phase de repos et il pourra consommer jusqu’à 200mA lors de la phase où il captera ses données.
Les diodes Leds consommeront lorsqu’elles seront allumées environ 20mA.
Le NEO-6 GY-GPS6MV2 quant à lui consommera 100mA lors de sa réception envoie de données c’est-à-dire tout le temps car on ne pourra pas le mettre en mode sleep.

La consommation totale instantanée lorsque tous les composants sont actifs pourraient alors être de 842.5mA, mais elle serait de 100mA lorsque les composants qui ont un mode sleep le sont. 

# Sources
https://reso-nance.org/wiki/materiel/esp8266/accueil
https://projetsdiy.fr/mesure-humidite-temperature-capteur-dht11-dht22-arduino-raspberry/
https://sandboxelectronics.com/files/SEN-000007/MG811.pdf
https://www.u-blox.com/sites/default/files/products/documents/NEO-6_DataSheet_(GPS.G6-HW-09005).pdf
http://etronics.free.fr/dossiers/analog/analog12/diodeled.htm

