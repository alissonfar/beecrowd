const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = [, , ]
let n2 = [, , ]

rl.question('', (valor) => {
    n[0] = parseInt(valor)
    rl.question('', (valor) => {
        n[1] = parseInt(valor)
        rl.question('', (valor) => {
            n[2] = parseFloat(valor).toFixed(2)
            rl.question('', (valor) => {
                n2[0] = parseInt(valor)
                rl.question('', (valor) => {
                    n2[1] = parseInt(valor)
                    rl.question('', (valor) => {
                        n2[2] = parseFloat(valor).toFixed(2)
                        rl.close()
                        // console.log('Valores de n:')
                        // for(let c = 0; c < n.length; c++) {
                        //     console.log(`Matriz posição ${c}, com valor ${n[c]} para essa posição.`)
                        // }
                        // console.log('Valores de n2:')
                        // for(let c = 0; c < n2.length; c++) {
                        //     console.log(`Matriz posição ${c}, com valor ${n2[c]} para essa posição.`)
                        // }
                        let apagar = n[1] * n[2]
                        let apagar2 = n2[1] * n2[2]

                        let apagartotal = apagar + apagar2

                        apagartotal = parseFloat(apagartotal).toFixed(2)

                        console.log(`VALOR A PAGAR: R$ ${apagartotal}`)

                    })
                })
            })
        })
    })
})
