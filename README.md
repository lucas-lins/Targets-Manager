# Task Manager - Gerenciador de metas

Este repositório contém um projeto criado durante um evento de desenvolvimento focado em JavaScript e Node.js, promovido pela RocketSeat. A aplicação, executada via terminal (CLI), permite que os usuários gerenciem suas metas pessoais de forma prática

## Principais recursos

- **Adicionar Meta:** Insere uma nova meta na lista de tarefas.
- **Visualizar Metas:** Exibe todas as metas cadastradas, com a opção de marcar metas como concluídas.
- **Metas Concluídas:** Lista as metas que já foram finalizadas.
- **Metas Pendentes:** Mostra as metas que ainda estão em aberto.
- **Remover Meta:** Exclui metas da lista.
- **Armazenamento de Dados:** Todas as metas são guardadas no arquivo metas.json, garantindo que os dados persistam entre execuções.

## Estrutura do Projeto
O projeto foi desenvolvido utilizando JavaScript com Node.js e a biblioteca @inquirer/prompts, responsável pela interação com o usuário no terminal. As metas são armazenadas localmente em um arquivo metas.json, o que permite que o gerenciador funcione offline e mantenha os dados entre execuções.

## Organização do Código
- Gerenciamento de Metas: O projeto possui funções específicas para adicionar, listar, remover e marcar metas. A separação clara entre essas funções facilita a manutenção e a expansão do código.
- Persistência de Dados: As metas são carregadas automaticamente do arquivo metas.json ao iniciar o programa e qualquer alteração (como adicionar, marcar ou remover) é imediatamente salva, garantindo que as mudanças sejam refletidas mesmo após o fechamento do aplicativo.
- Navegação no Menu: A interface de navegação via terminal utiliza um loop assíncrono, oferecendo um menu dinâmico com as opções de cadastro, visualização, marcação e remoção de metas, além da opção de sair do aplicativo.
