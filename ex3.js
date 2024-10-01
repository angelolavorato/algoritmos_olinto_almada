let numero = prompt('Digite um número:')

numero = Number(numero) // Convertendo a entrada para número

if (numero > 0) {
  console.log('Positivo')
} else if (numero < 0) {
  console.log('Negativo')
} else {
  console.log('Zero')
}
