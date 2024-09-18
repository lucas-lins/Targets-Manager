const {select, input, checkbox} = require('@inquirer/prompts')
const fs = require('fs');

const arquivoMetas = './metas.json';

const importarMetas = () => {
    try {
        const data = fs.readFileSync(arquivoMetas, 'utf-8');
        return JSON.parse(data);
    } catch (error) { return[]; }
};

const salvarMetas = () => {
    fs.writeFileSync(arquivoMetas, JSON.stringify(metas, null, 2), 'utf-8')
};

let metas = importarMetas();

const cadastrarMeta = async () => {
    console.clear();
    const novaMeta = await input({
        message: "Digite uma meta: "
    })

    if(novaMeta.length == 0){
        console.log("A meta precisa ter um título.")
        return
    }

    metas.push(
        {value: novaMeta, checked: false}
    )

    salvarMetas(); // Salvar metas no arquivo após cadastrar
    console.log(`Meta "${novaMeta}" cadastrada com sucesso!`);
}

const removerMetas = async() => {
    console.clear();
    if (metas.length === 0) {
        console.log("Não há metas para remover.");
        return;
    }

    const metaParaRemover = await select({
        message: "Selecione uma meta para remover: ",
        choices: metas.map(meta => ({
            name: meta.value,
            value: meta.value
        }))
    })

    console.clear();
    console.log(`Tem certeza que deseja remover a meta: "${metaParaRemover}" ?`);
    const confirmar = await select ({
        message: "Confirmar exclusão?",
        choices: [
            {
                name: "Sim",
                value: "sim"
            },
            {
                name: "Não",
                value: "nao"
            }
        ]
    })

    switch(confirmar){
        case "sim":
            metas = metas.filter(meta => meta.value !== metaParaRemover);
            salvarMetas();
            console.log(`Meta "${metaParaRemover}" removida com sucesso.`);
            break;
        case "nao":
            console.log(`Exclusão cancelada`);
            break;

    }
}

const listarMetas = async() => {
    console.clear();
    const filtro = await select({
        message: "Que metas você quer listar? > ",
        choices: [
            {name: "Todas as metas", value: "todas"},
            {name: "Metas concluídas", value: "concluidas"},
            {name: "Metas não concluídas", value: "pendentes"}
        ]
    })

    let metasFiltradas = metas;
    if (filtro === "concludas") {
        metasFiltradas = metas.filter(meta => meta.checked);
    }
    else if (filtro === "pendentes") {
        metasFiltradas = metas.filter(meta => !meta.checked)
    }

    if (metasFiltradas.length === 0) {
        console.log("Não há metas para listar.");
        return;
    }

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

    salvarMetas();
    console.log("Metas atualizadas:");
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
                    name: "Remover metas",
                    value: "remover"
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
                console.log("Selecionou marcação")
                await marcarMetas();
                break
            case "listar":
                console.log("Selecionou Listagem")
                await listarMetas();
                break
            case "remover":
                console.log("Selecionou remoção")
                await removerMetas();
                break
            case "sair":
                console.log("Sair do programa")
                return;
        }
        
    }
}

start();
