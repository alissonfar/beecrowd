
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = [ , , ]
let n2 = [ , , ]

rl.question('', (valor) => {
    n[0] = parseInt(valor)
    rl.question('', (valor) => {
        n[1] = parseInt(valor)
        rl.question('', (valor) => {
            n[2] = parseInt(valor)

            for(let con = 0; con < n.length; con++) {
                console.log(`Matriz posição ${con} com valor ${n[con]}`)
            }
            
        })

    })
})

rl.question('', (valor) => {
    n2[0] = parseInt(valor)
    rl.question('', (valor) => {
        n2[1] = parseInt(valor)
        rl.question('', (valor) => {
            n2[2] = parseInt(valor)

            for(let con2 = 0; con2 < n.length; con2++) {
                console.log(`Matriz posição ${con2} com valor ${n[con2]}`)
            }
            
            rl.close()
        })

    })
})