const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const n = 3.14159

rl.question('', (r) => {
  r = parseFloat(r).toFixed(4)

  var area_valor = n * (r ** 2)

  var area = parseFloat(area_valor.toFixed(4))

  console.log(`A=${area.toFixed(4)}`)
})
