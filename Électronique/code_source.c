#include <string.h>
#include <stdio.h>
#include <ctype.h>

#include <dht.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
#include <ESP8266WiFi.h>
WiFiClient client;
char ssid[] = "*************";
char password[] = "*************";
byte mac[6];

#include <MySQL_Connection.h>
#include <MySQL_Cursor.h>
MySQL_Connection conn((Client *)&client);

char INSERT_SQL_AIR_STAT[]= "INSERT INTO db_GreenR.AIR_STAT(ID_AIR,TEMPERATURE,HUMIDITY,CO2) VALUES (\"%s\", %f, %.2f, %f)";
char query_AIR_STAT[128];

char INSERT_SQL_POSITION[]="INSERT INTO db_GreenR.POSITION(ID_POS,LAT,LON,ALT) VALUES (\"%s\", %f, %f, %f)";
char query_POSITION[200];

char INSERT_SQL_CROSS_CENTER[]="INSERT INTO db_GreenR.CROSS_CENTER(SERIAL_NUM,ID_POS,ID_AIR,DATE_TIME) VALUES (%d, \"%s\", \"%s\", %d)";
char query_CROSS_CENTER[200];

int SERIAL_NUM = 1;

/*=========================*/
/* NTPClient configuration */
/*=========================*/

const long utcOffsetInSeconds = 3600;
char daysOfTheWeek[7][12] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
// Define NTP Client to get time
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "europe.pool.ntp.org", utcOffsetInSeconds);

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
double  LAT = 50.666;
double  LON = 4.6120742; 
double ALT = 123;

/*=========================*/

#define dht_dpin D7
dht DHT;

int strB;
int strB2;


IPAddress server_addr(51, 91, 120, 112); // MySQL server IP   51.91.120.112
char db_user[] = "**********"; //MySql user
char db_password[] = "**********"; // MySQL password

void setup(){
  Serial.begin(9600);
  Serial.print("Connecting to ");
  Serial.print(ssid);
  
  WiFi.begin(ssid, password);
  
  while(WiFi.status() != WL_CONNECTED){
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
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
    delay(200);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("Connected to mysql server!");
  
}


void loop(){


  DHT.read11(dht_dpin);

  //générateur aléatoire pour taux CO2
  int i = random(0,2);
  if(i==0){
    CO2 = CO2 + random(0,2);
  }
  else {
    CO2 = CO2 - random(0,2);
  }

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
  
  /*==============================*/
  /* data configuration           */
  /*==============================*/

   Serial.print("Temperature: ");
   Serial.println(DHT.temperature);
   Serial.print("deg C. Humidity: ");
   Serial.println(DHT.humidity);
   Serial.print("Taux de CO2 : ");
   Serial.println(CO2);
   Serial.print("ID : ");
   strB=toupper(daysOfTheWeek[timeClient.getDay()][1]);
   char c = strB;
   int nbr = epcohTime % 10000000000;
 
   char chaineAIR[] = "AS";
   sprintf(ID_AIR, "%s%d",chaineAIR,nbr);
   sprintf(query_AIR_STAT, INSERT_SQL_AIR_STAT, ID_AIR, DHT.temperature, DHT.humidity, CO2);
   Serial.println(ID_AIR);
   

   LAT = LAT + random(-1,2);
   LON = LON + random(-1,2);
   ALT = ALT + random(-1,2);
   char chainePOS[] = "PO";
   sprintf(ID_POS, "%s%d",chainePOS,nbr);
   Serial.println(ID_POS);
   sprintf(query_POSITION, INSERT_SQL_POSITION, ID_POS, LAT, LON, ALT);
   char ID_AIR2[12]="AS"; 
   char cstr[10];
   itoa(epcohTime, cstr, 10);
   strcat(ID_AIR2, cstr);
   sprintf(query_CROSS_CENTER, INSERT_SQL_CROSS_CENTER, SERIAL_NUM, ID_POS, ID_AIR2, epcohTime);


  /*=======================================*/

  Serial.println("Recording data.");
  Serial.println(query_AIR_STAT);
  Serial.println(query_POSITION);
  Serial.println(query_CROSS_CENTER);
  MySQL_Cursor *cur_mem = new MySQL_Cursor(&conn);
  cur_mem->execute(query_AIR_STAT);
  cur_mem->execute(query_POSITION);
  cur_mem->execute(query_CROSS_CENTER);
  delete cur_mem;

  
  
  Serial.println("Delay 30s");
  Serial.println(" ");
  delay(5000); //30 sec  
}
