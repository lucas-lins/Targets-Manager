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

const listarMetas = async () => {
    console.clear();
    const respostas = await checkbox({
        message: "Use setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar > ",
        choices: [...metas]
    })

    if(respostas.length == 0){
        console.log("Nenhuma meta selecionada.")
        return
    }
    console.log(metas);

    metas.forEach((m)=> {
        m.checked = false;
    })

    respostas.forEach((resposta)=>{
        const meta = metas.find((m)=>{
            return m.value == resposta
        })

        meta.checked = true;
    })
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