// By NexFord
console.log("By NexFord ");

let hexaArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let formatError = "Wrong format";

function isHexa(hexa) {
  for (var i = 0; i < hexa.length; i++) {
    if (!hexaArray.includes(hexa[i])) {
      return false;
    }
  }
  return true;
}

function convert(hexa) {
  hexa = document.getElementById('convi').value;
  hexa = hexa.toUpperCase()

  if (hexa.length == 0) {
    document.getElementById('result').innerHTML="Empty field";
    console.error("Empty field !");
    return;
  }
  if (!isHexa(hexa)) {
    document.getElementById('result').innerHTML=formatError;
    console.error("This is not a hexadecimal !");
    return;
  }

  var number = parseInt(hexa, 16).toString();
  console.log("("+hexa+")="+number);

  if (number < 100) {
    document.getElementById('result').innerHTML="Wrong input";
    console.error("The number is too small");
    return;
  }

  if (number.length%3 == 2) {
    document.getElementById('result').innerHTML=formatError;
    console.error("Not the right length !");
    return;
  }

  if (number.length%3 == 1 && (number[0] == "8" || number[0] == "9")) {
    document.getElementById('result').innerHTML=formatError;
    console.error("The operator must be between 0 and 7, not " + number[0]);
    return;
  }

  var convertNumber;
  var operator = 0;
  if (number.length%3 == 1) {
    operator = number[0];
    number = number.replace(/^./, "");
  }

  if (number.length%3 == 0) {
    var numberSize = number.length/3;
    convertNumber = ((Math.trunc(operator/4)*-2+1)*Math.pow(number.substring(0, numberSize), 3) + (Math.trunc(operator%4/2)*-2+1)*Math.pow(number.substring(numberSize, 2*numberSize), 3) + (Math.trunc(operator%2)*-2+1)*Math.pow(number.substring(2*numberSize, 3*numberSize), 3));
    var calc = (Math.trunc(operator/4)*-2+1)+"*"+number.substring(0, numberSize)+"³" +"+"+ (Math.trunc(operator%4/2)*-2+1)+"*"+number.substring(numberSize, 2*numberSize)+"³" +"+"+ (Math.trunc(operator%2)*-2+1)+"*"+number.substring(2*numberSize, 3*numberSize)+"³";
    var convertNumberFormat = new Intl.NumberFormat().format(convertNumber);
    console.log(convertNumberFormat+" = "+calc);
  }

  document.getElementById('result').innerHTML=convertNumberFormat;
}
