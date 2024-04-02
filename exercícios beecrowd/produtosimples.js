const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (inta) => {
    rl.question('', (intb) => {
        var a = parseInt(inta)
        var b = parseInt(intb)

        var PROD = a * b

        console.log(`PROD = ${PROD}`)

        rl.close()
    })
})