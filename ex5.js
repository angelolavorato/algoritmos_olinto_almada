let n = prompt('Digite um número:')
n = Number(n) // Convertendo a entrada para número

let fatorial = 1

while (n > 0) {
  fatorial *= n
  n-- // Decrementa o valor de n
}

console.log('Fatorial: ' + fatorial)
