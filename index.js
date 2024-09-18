const {select, input, checkbox} = require('@inquirer/prompts')

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

const removerMeta = async() => {
    console.clear();   
}

const listarMetas = async() => {
    console.clear();
    const respostas = await checkbox({
        message: "Use setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar > ",
        choices: metas.map(meta => ({
            name: meta.value,
            value: meta.value,
            checked: meta.checked
        }))
    })  
    return respostas;
}


const marcarMetas = async () => {
    const respostas = await listarMetas();
    metas.forEach((meta) => {
        // Verifica se a meta foi selecionada para marcar/desmarcar
        meta.checked = respostas.includes(meta.value);
    });

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
                    name: "Marcar metas",
                    value: "marcar"
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
            case "marcar":
                console.log("Selecionou Listagem")
                await marcarMetas();
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
