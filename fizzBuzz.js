/*class Fizz_buzz {

retornar_fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return "FizzBuzz";
    } else if (numero % 3 === 0) {
      return "Fizz";
    } else if (numero % 5 === 0) {
      return "Buzz";
    } else {
      return String(numero);
    }
  }
}

module.exports = Fizz_buzz;

function fizzBuzz() {
  for(let i = 1; i ≤ 100; i++) {
    if (i % 15 === 0) console.log('fizzbuzz')
    else if (i % 3 === 0) console.log('fizz')
    else if (i % 5 === 0) console.log('buzz')
    else console.log(i)
  }
}

fizzBuzz()*/

class FizzBuzz{
  retornar_fizz_buzz(numero){
      if(numero %15 === 0) return 'FizzBuzz';
      if(numero %3 === 0) return 'Fizz';
      if(numero %5 === 0) return 'Buzz';
      if(numero === numero) return numero;
  }

};
 

module.exports = FizzBuzz;