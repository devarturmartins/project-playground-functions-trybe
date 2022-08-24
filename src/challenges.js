// Desafio 1
function compareTrue(param1, param2) {
 if (param1 && param2) {
  return true;
 }
   else {
    return false
   }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let novaString = string.split(' ');
  return novaString;
}

// Desafio 4
function concatName(array) {
  let armazenaPrimeiroItem = array[0];
  let armazenaUltimoItem = array[array.length -1]; 
  let result = armazenaUltimoItem + ', ' + armazenaPrimeiroItem;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins*3;
  let pointsTies = ties*1;
  let totalPoints = pointsWins + pointsTies; 
  return totalPoints;
}


// Desafio 6
function highestCount(arrayValues) {
  let maiorValor = arrayValues[0];
  let contador = 0;
  for (let i = 0; i < arrayValues.length; i += 1){
    if(arrayValues[i] > maiorValor){
      maiorValor = arrayValues[i];
    }
    }
  for (let i = 0; i < arrayValues.length; i+= 1){
    if(maiorValor === arrayValues[i]){
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
