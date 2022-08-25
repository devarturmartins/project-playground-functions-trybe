// Desafio 11
function generatePhoneNumber(arrayPhone) {
  let contador = 0; 
  let xRepete = 0;
  let numberPhone = '';
  if((arrayPhone.length !== 11)){
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < arrayPhone.length; i+= 1){
    if((arrayPhone[i] > 9) || (arrayPhone[i]<0)){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let i = 0; i < arrayPhone.length; i += 1){
    for(let j = i; j < arrayPhone.length; j += 1){
      if (arrayPhone[j] === arrayPhone[i]){
        contador += 1;
      }
      if(contador > xRepete){
        xRepete = contador;
        if(xRepete >= 3){
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    contador = 0;
  }
  numberPhone = '(' + arrayPhone[0] + arrayPhone[1] + ')' + ' ' + arrayPhone[2] + arrayPhone[3] + arrayPhone[4] + arrayPhone[5] + arrayPhone[6] + '-' + arrayPhone[7] + arrayPhone[8] + arrayPhone[9] + arrayPhone[10];

  return numberPhone;
  }


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
