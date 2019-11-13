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

# Sources
https://reso-nance.org/wiki/materiel/esp8266/accueil
https://projetsdiy.fr/mesure-humidite-temperature-capteur-dht11-dht22-arduino-raspberry/
https://sandboxelectronics.com/files/SEN-000007/MG811.pdf
https://www.u-blox.com/sites/default/files/products/documents/NEO-6_DataSheet_(GPS.G6-HW-09005).pdf
http://etronics.free.fr/dossiers/analog/analog12/diodeled.htm

