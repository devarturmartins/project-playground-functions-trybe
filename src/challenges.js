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
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
