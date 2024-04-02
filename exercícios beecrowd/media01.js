const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (nA) => {
    rl.question('', (nB) => {
        var A = parseFloat(nA).toFixed(1)
        var B = parseFloat(nB).toFixed(1)

        var notaA = A * 3.5
        var notaB = B * 7.5

        var MEDIA = (notaA + notaB) / 11

        console.log(`MEDIA = ${MEDIA.toFixed(5)}`)

        rl.close()
    })
})