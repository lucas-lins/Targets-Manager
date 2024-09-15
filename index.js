const {select} = require('@inquirer/prompts')

const start = () => {
    while (true) {
        let option = "Cadastrar"
        switch(option) {
            case "Cadastrar":
                console.log("Cadastro")
                break
            case "Listar":
                console.log("Listagem")
                break
            case "Sair":
                console.log("Sair do programa")
                break
        }
        
        
        
        return;
    }
}

start();