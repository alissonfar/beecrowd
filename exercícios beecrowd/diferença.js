const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (nA) => {
    rl.question('', (nB) => {
        rl.question('', (nC) => {
            rl.question('', (nD) => {
                var A = parseInt(nA)
                var B = parseInt(nB)
                var C = parseInt(nC)
                var D = parseInt(nD)

                var DIFERENCA = (A * B) - (C * D)

                console.log(`DIFERENCA = ${DIFERENCA}`)
            })
        })
    })
})