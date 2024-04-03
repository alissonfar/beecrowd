const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (n) => {
    rl.question('', (nH) => {
        rl.question('', (s) => {
            var numero = parseInt(n)
            var horas = parseInt(nH)
            var valor = parseFloat(s).toFixed(2)

            var salario = horas * valor

            console.log(`NUMBER = ${numero}`)
            console.log(`SALARY = U$ ${salario.toFixed(2)}`)

            rl.close()

        })
    })
})