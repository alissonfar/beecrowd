const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})

rl.question('', (A) => {
    rl.question('', (B) => {
        var nA = parseInt(A)
        var nB = parseInt(B)

        var SOMA = nA + nB

        console.log(`SOMA = ${SOMA}`)
        rl.close()
    })
})

