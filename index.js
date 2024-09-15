const {select} = require('@inquirer/prompts')

const start = async() => {
    while (true) {

        const option = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar" //O valor escolhido será entrada para option
                },
                {
                    name: "Listar meta",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                },
            ]
        })


        switch(option) {
            case "cadastrar":
                console.log("Cadastro")
                break
            case "listar":
                console.log("Listagem")
                break
            case "sair":
                console.log("Sair do programa")
                return;
        }
        
    }
}

start();