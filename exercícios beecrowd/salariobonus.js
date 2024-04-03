const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (nome) =>{
    rl.question('', (salario) => {
        rl.question('', (vendas) => {
            salario = parseFloat(salario)
            vendas = parseFloat(vendas)

            var stotal = (vendas * 0.15) + salario

            console.log(`TOTAL = R$ ${stotal.toFixed(2)}`)

            rl.close()
        })

        
    })
})