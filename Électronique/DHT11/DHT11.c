#include <dht.h>
#include <Wire.h> 
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,16,2);  // set the LCD address to 0x27 for a 16 chars and 2 line display


#define dht_dpin A0

dht DHT;

void setup() {
  
  Serial.begin(9600);
  
  delay(1000);
  Wire.begin();
  lcd.init();                      // initialize the lcd 
  lcd.backlight();
  lcd.setCursor(0,0);
  lcd.print("GreenR");
  lcd.setCursor(0,1);
  for(int i=0;i<16;i++){
    lcd.print("#");
    delay(200);
  }
  lcd.clear();

}

void loop() {

  float ppm = gasSensor.getPPM();
  
  DHT.read11(dht_dpin);
  Serial.print("Humidité=");
  Serial.print(DHT.humidity);
  Serial.print("% ");
  Serial.print("Température= ");
  Serial.print(DHT.temperature);
  Serial.print("°C ");
  
  lcd.setCursor(0,0);
  lcd.print(DHT.humidity);
  lcd.print(" % - ");
  lcd.print(DHT.temperature);
  lcd.print("*C");

  delay(500);

}
