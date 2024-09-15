const {select, input} = require('@inquirer/prompts')

let meta = {
    value: 'Enviar ao menos um commit para o github',
    checked: false
    }


let metas = [meta]

const cadastrarMeta = async () => {
    console.clear();
    const meta = await input({
        message: "Digite uma meta: "
    })

    if(meta.length == 0){
        console.log("A meta precisa ter um título.")
        return
    }

    metas.push(
        {value: meta, checked: false}
    )
    
}

const listarMetas = async () => {
    console.clear();
    console.log(metas);
}

const start = async() => { //Função assíncrona
    while (true) {

        const option = await select({ 
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar metas",
                    value: "cadastrar" //O valor escolhido será entrada para option
                },
                {
                    name: "Listar metas",
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
                console.log("Selecionou Cadastro")
                await cadastrarMeta();
                break
            case "listar":
                console.log("Selecionou Listagem")
                await listarMetas();
                break
            case "sair":
                console.log("Sair do programa")
                return;
        }
        
    }
}

start();