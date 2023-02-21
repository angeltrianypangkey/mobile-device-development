//Import Konversi Suhu
import { fahrenheitToCelcius } from "./konversiSuhu.js";
let temp = 99.20;
let Celcius = fahrenheitToCelcius(temp);

console.log(`${temp}F = ${Celcius}C`);

//Import BMI
import tugasBMI from "./bmi.js";
const b = 68;
const t = 1.69;
const resultbmi = tugasBMI(b, t);
console.log(`BMI = ${resultbmi.bmi} --> ${resultbmi.jenis}`);