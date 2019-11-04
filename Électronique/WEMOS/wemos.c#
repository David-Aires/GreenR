#include <ESP8266WiFi.h>
WiFiClient client;
char ssid[] = "**************";
char password[] = ""**************";";
byte mac[6];

#include <MySQL_Connection.h>
#include <MySQL_Cursor.h>
MySQL_Connection conn((Client *)&client);
char INSERT_SQL[]= "INSERT INTO db_essai.sensor(temperature, humidity, pressure, light) VALUES (%f, %.2f, %d, %d)";
char query[128];

float temperature = 10;
float humidity = 30;
int pressure = 56;
int light = 40;

IPAddress server_addr(51, 91, 120, 112); // MySQL server IP   51.91.120.112
char db_user[] = ""**************";"; //MySql user
char db_password[] = ""**************";"; // MySQL password

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

}
  
void envoieDonnee(){
  sprintf(query, INSERT_SQL, temperature, humidity, pressure, light);
  Serial.println("Recording data.");
  Serial.println(query);
  MySQL_Cursor *cur_mem = new MySQL_Cursor(&conn);
  cur_mem->execute(query);
  delete cur_mem;
  light++;
  temperature++;
  pressure++;
  humidity++;
  Serial.println("Delay 30s");
  delay(30000); //30 sec  
}
