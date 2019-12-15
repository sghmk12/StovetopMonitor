#include "High_Temp.h"

HighTemp ht(A5, A3);

float temperature;
int count = 0;

void setup() {
  Serial.begin(115200);
  Serial.println("grove - hight temperature sensor test demo");
  ht.begin();
}

void loop() {

  if (count == 10) {
    count = 0;
    temperature = temperature/10;
    Serial.println();
    Serial.println("AVERAGE VALUE:");
    Serial.println(temperature);
    Serial.println();

    temperature = 0;
  }else{
    count++;
    temperature += ht.getRoomTmp();
  }
  delay(100);
}
