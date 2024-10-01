let soma = 0
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    // Verifica se o número é ímpar
    soma += i
  }
}
console.log('A soma dos ímpares é: ' + soma)
