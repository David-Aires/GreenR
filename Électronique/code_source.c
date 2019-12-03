#include <string.h>
#include <stdio.h>
#include <ctype.h>
#include <CO2Sensor.h>
#include <TinyGPS++.h>
#include <SoftwareSerial.h>
#include <dht.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
#include <ESP8266WiFi.h>
#include <ESP8266Ping.h>
#include <MySQL_Connection.h>
#include <MySQL_Cursor.h>


/*Connection au WiFi*/
WiFiClient client;
char ssid[] = "*****************";
char password[] = "*****************";
byte mac[6];

MySQL_Connection conn((Client *)&client);


/*Query pour db*/
char INSERT_SQL_AIR_STAT[]= "INSERT INTO db_GreenR.AIR_STAT(ID_AIR,TEMPERATURE,HUMIDITY,CO2) VALUES (\"%s\", %f, %.2f, %.2f)";
char query_AIR_STAT[128];

char INSERT_SQL_POSITION[]="INSERT INTO db_GreenR.POSITION(ID_POS,LAT,LON,ALT) VALUES (\"%s\", %f, %f, %f)";
char query_POSITION[200];

char INSERT_SQL_CROSS_CENTER[]="INSERT INTO db_GreenR.CROSS_CENTER(SERIAL_NUM,ID_POS,ID_AIR,DATE_TIME) VALUES (%d, \"%s\", \"%s\", %d)";
char query_CROSS_CENTER[200];

int SERIAL_NUM = 1; //Numéro de la box

/*=========================*/
/* NTPClient configuration */
/*=========================*/

const long utcOffsetInSeconds = 3600;
char daysOfTheWeek[7][12] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
// Define NTP Client to get time
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "europe.pool.ntp.org", utcOffsetInSeconds);


/*=========================*/
/* CO2 sensor configuration */
/*=========================*/

CO2Sensor co2Sensor(A0, 0.99, 100);

/*=========================*/

int ledVerte = D10;
int ledRouge = D6;


/*=========================*/
/* GPS configuration */
/*=========================*/

  static const int RXPin = D5, TXPin = D4; //brancher en inverse sur la board
  static const uint32_t GPSBaud = 9600;

  TinyGPSPlus gps;

  SoftwareSerial ss(RXPin, TXPin);

  
  int verif=0;


/*=========================*/

float humi;
float temp;
float CO2 = 410;
char ID_AIR[12];
char ID_AIR2[12];

/*=========================*/
/* position configuration */
/*=========================*/

char ID_POS[12];
double  LAT;
double  LON; 
double ALT;

/*=========================*/

#define dht_dpin D7
dht DHT;

int strB;
int strB2;


IPAddress server_addr(51, 91, 120, 112); // MySQL server IP   51.91.120.112
char db_user[] = "*****************"; //MySql user
char db_password[] = "*****************"; // MySQL password

void setup(){

  pinMode(ledVerte, OUTPUT);
  pinMode(ledRouge, OUTPUT);
  digitalWrite(ledVerte, LOW);
  digitalWrite(ledRouge, HIGH);
  

  
  Serial.begin(9600);
  Serial.print("Connecting to ");
  Serial.print(ssid);
  
  WiFi.begin(ssid, password);

  int i=0;
  while(WiFi.status() != WL_CONNECTED){
    if(i==20){
      erreurWIFI();
    }
    delay(500);
    Serial.print(".");
    i++;
  }
  Serial.println("");
  digitalWrite(ledVerte, HIGH);
  digitalWrite(ledRouge, LOW);
  Serial.println("WiFi connected");
  if(!Ping.ping("www.google.com")){
    erreur();
  }
  digitalWrite(D3, HIGH);
  digitalWrite(D6, LOW);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  WiFi.macAddress(mac);
  Serial.print("MAC: ");
  Serial.print(mac[5], HEX);
  Serial.print(":");
  Serial.print(mac[4], HEX);
  Serial.print(":");
  Serial.print(mac[3], HEX);
  Serial.print(":");
  Serial.print(mac[3], HEX);
  Serial.print(":");
  Serial.print(mac[1], HEX);
  Serial.print(":");
  Serial.print(mac[0], HEX);
  Serial.println("");
  
  Serial.println("Connecting to mysql server");
  while(conn.connect(server_addr, 3306, db_user, db_password) != true){
    if(i==20){
      erreurWIFI();
    }
    delay(500);
    Serial.print(".");
    i++;
  }
  Serial.println("");
  Serial.println("Connected to mysql server!");


  co2Sensor.calibrate();

  ss.begin(GPSBaud);

   static const double LONDON_LAT = 51.508131, LONDON_LON = -0.128002;

  Serial.print("Nombre satellites: ");
  printInt(gps.satellites.value(), gps.satellites.isValid(), 5);
  //printFloat(gps.hdop.hdop(), gps.hdop.isValid(), 6, 1);
  Serial.print("  LAT: ");
  printFloat(gps.location.lat(), gps.location.isValid(), 11, 6);
  Serial.print("  LON: ");
  printFloat(gps.location.lng(), gps.location.isValid(), 12, 6);
  Serial.print("  ALT: ");
  printFloat(gps.altitude.meters(), gps.altitude.isValid(), 7, 2);
  
  Serial.println();
  
  smartDelay(1000);
  
}

void loop(){

    // Debug: if we haven't seen lots of data in 5 seconds, something's wrong.
  digitalWrite(ledVerte, HIGH);
  digitalWrite(ledRouge, HIGH);
  if(gps.location.lat()==0){
    Serial.print("GPS-0");
    while(gps.location.lat()==0){
       digitalWrite(ledVerte, LOW);
       digitalWrite(ledRouge, HIGH);
      Serial.print("."); 
      smartDelay(1000);
       digitalWrite(ledVerte, HIGH);
       digitalWrite(ledRouge, LOW);
       delay(1000);
    }
  }
  digitalWrite(ledVerte, LOW);
  digitalWrite(ledRouge, LOW);

  if(!Ping.ping("www.google.com")){
    erreurWIFI();
  }


  DHT.read11(dht_dpin);

  //lecture taux CO2
  float valCO2 = co2Sensor.read();

  timeClient.update();

  //Le timestamp (unix) désigne le nombre de secondes écoulées depuis le 1er janvier 1970 à minuit UTC précise.
  unsigned long epcohTime =  timeClient.getEpochTime();

  Serial.print("Date : ");
  Serial.println(timeClient.getFormattedTime());
  Serial.print(daysOfTheWeek[timeClient.getDay()]);
  Serial.print(", ");
  Serial.print(timeClient.getHours()+1);
  Serial.print(":");
  Serial.print(timeClient.getMinutes());
  Serial.print(":");
  Serial.println(timeClient.getSeconds());

    
  if (millis() > 5000 && gps.charsProcessed() < 10){
    Serial.println(F("No GPS data received: check wiring"));
    if(erreurGPS());
  }
  
  Serial.print("Nombre satellites: ");
  printInt(gps.satellites.value(), gps.satellites.isValid(), 5);
  //printFloat(gps.hdop.hdop(), gps.hdop.isValid(), 6, 1);
  Serial.print("  LAT: ");
  printFloat(gps.location.lat(), gps.location.isValid(), 11, 6);
  Serial.print("  LON: ");
  printFloat(gps.location.lng(), gps.location.isValid(), 12, 6);
  Serial.print("  ALT: ");
  printFloat(gps.altitude.meters(), gps.altitude.isValid(), 7, 6);
  
  Serial.println();
  
  smartDelay(1000);

  
  
  /*==============================*/
  /* data configuration           */
  /*==============================*/


   Serial.print("Temperature: ");
   Serial.print(DHT.temperature);
   Serial.print("deg C. Humidity: ");
   Serial.print(DHT.humidity);
   Serial.print("%. Taux de CO2 : ");
   Serial.println(valCO2);
   Serial.print("ID : ");
   strB=toupper(daysOfTheWeek[timeClient.getDay()][1]);
   char c = strB;
   int nbr = epcohTime % 10000000000;
 
   char chaineAIR[] = "AS";
   sprintf(ID_AIR, "%s%d",chaineAIR,nbr);
   sprintf(query_AIR_STAT, INSERT_SQL_AIR_STAT, ID_AIR, DHT.temperature, DHT.humidity, valCO2);
   Serial.println(ID_AIR);
   

   LAT = LAT + random(-1,2);
   LON = LON + random(-1,2);
   ALT = ALT + random(-1,2);
   char chainePOS[] = "PO";
   sprintf(ID_POS, "%s%d",chainePOS,nbr);
   Serial.println(ID_POS);
   sprintf(query_POSITION, INSERT_SQL_POSITION, ID_POS, gps.location.lat(), gps.location.lng(), gps.altitude.meters());
   char ID_AIR2[12]="AS"; 
   char cstr[10];
   itoa(epcohTime, cstr, 10);
   strcat(ID_AIR2, cstr);
   sprintf(query_CROSS_CENTER, INSERT_SQL_CROSS_CENTER, SERIAL_NUM, ID_POS, ID_AIR2, epcohTime);


/*=======================================*/
/*         ENVOIE DE DONNEES             */
/*=======================================*/

  Serial.println("Recording data.");
  Serial.println(query_AIR_STAT);
  Serial.println(query_POSITION);
  Serial.println(query_CROSS_CENTER);
 /* MySQL_Cursor *cur_mem = new MySQL_Cursor(&conn);
  cur_mem->execute(query_AIR_STAT);
  cur_mem->execute(query_POSITION);
  cur_mem->execute(query_CROSS_CENTER);
  delete cur_mem;
  Serial.println("Données envoyées");*/

  
  
  Serial.println("Delay 30s");
  Serial.println(" ");
  delay(1000); //30 sec  
}

// This custom version of delay() ensures that the gps object
// is being "fed".
static void smartDelay(unsigned long ms)
{
  unsigned long start = millis();
  do 
  {
    while (ss.available())
      gps.encode(ss.read());
  } while (millis() - start < ms);
}

static void printFloat(float val, bool valid, int len, int prec)
{
  if (!valid)
  {
    while (len-- > 1)
      Serial.print('*');
    Serial.print(' ');
  }
  else
  {
    Serial.print(val, prec);
    int vi = abs((int)val);
    int flen = prec + (val < 0.0 ? 2 : 1); // . and -
    flen += vi >= 1000 ? 4 : vi >= 100 ? 3 : vi >= 10 ? 2 : 1;
    for (int i=flen; i<len; ++i)
      Serial.print(' ');
  }
  smartDelay(0);
}

static boolean printFloatVerif(float val, bool valid, int len, int prec)
{
  if (!valid)
  {
    return true;
  }
  else
  {
    return false;
    
  }
  smartDelay(0);
}

static void printInt(unsigned long val, bool valid, int len)
{
  char sz[32] = "*****************";
  if (valid)
    sprintf(sz, "%ld", val);
  sz[len] = 0;
  for (int i=strlen(sz); i<len; ++i)
    sz[i] = ' ';
  if (len > 0) 
    sz[len-1] = ' ';
  Serial.print(sz);
  smartDelay(0);
}

static void printIntVerif(unsigned long val, bool valid, int len)
{
  char sz[32] = "*****************";
  if (valid)
    sprintf(sz, "%ld", val);
  sz[len] = 0;
  for (int i=strlen(sz); i<len; ++i)
    sz[i] = ' ';
  if (len > 0) 
    sz[len-1] = ' ';
  Serial.print(sz);
  smartDelay(0);
}

static void erreur(){
  digitalWrite(ledVerte, LOW);
  while(true){
    digitalWrite(ledRouge, HIGH);
    delay(200);
    digitalWrite(ledRouge,LOW);
    delay(200);
  }
}

static void erreurWIFI(){
  digitalWrite(ledVerte, LOW);
  digitalWrite(ledRouge, HIGH);
  Serial.println(" ");
  Serial.println("Tentative de reconnection au wifi");
  WiFi.begin(ssid, password);
    
  int i=0;
  while(WiFi.status() != WL_CONNECTED || !Ping.ping("www.google.com")){
    if(i==20){
      erreurWIFI();
    }
    delay(500);
    Serial.print(".");
    i++;
  }
  Serial.println("");
  digitalWrite(ledVerte, HIGH);
  digitalWrite(ledRouge, LOW);
  Serial.println("WiFi connected");
  loop();  
}

static boolean erreurGPS(){
  while(millis() > 5000 && gps.charsProcessed() < 10){
    digitalWrite(ledRouge, HIGH);
    delay(200);
    digitalWrite(ledRouge,LOW);
    delay(200);
  }
  return true;
}
