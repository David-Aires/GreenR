#include <Wire.h> 
#include <LiquidCrystal_I2C.h>
#include <MQ135.h>

LiquidCrystal_I2C lcd(0x27,16,2);  // set the LCD address to 0x27 for a 16 chars and 2 line display

const int mq135pin = A1;
MQ135 gasSensor = MQ135(mq135pin);

void setup() {
  
  Serial.begin(9600);

  float rzero = gasSensor.getRZero();
  Serial.print("R0: ");
  Serial.println(rzero);
  
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
  
  Serial.print("AirQua=");
  Serial.print(ppm);               // prints the value read
  Serial.println(" PPM");

  lcd.setCursor(0,1);
  lcd.print(ppm);
  lcd.print("ppm");

  delay(500);

}
