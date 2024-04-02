const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (nA) => {
    rl.question('', (nB) => {
        rl.question('', (nC) => {
            var A = parseFloat(nA).toFixed(1)
            var B = parseFloat(nB).toFixed(1)
            var C = parseFloat(nC).toFixed(1)

            var pA = A * 2
            var pB = B * 3
            var pC = C * 5

            var MEDIA = (pA + pB + pC) / 10

            console.log(`MEDIA = ${MEDIA.toFixed(1)}`)
        })
    })
})