Módulo de Calendário Acadêmico

O módulo de Calendário Acadêmico faz parte do Sistema de Gestão Universitária desenvolvido em Node.js, SQL, HTML, CSS e JavaScript, e tem como objetivo fornecer uma interface simples, visual e funcional para que a secretaria da instituição possa gerenciar eventos do ano letivo.

Ele foi desenvolvido para ser totalmente independente, usando armazenamento local no navegador (localStorage), não exigindo conexão com banco de dados para funcionar — facilitando demonstrações e testes.

🚀 Funcionalidades

📆 Visualização de calendário mensal

🗂️ Cadastro de eventos com:

Tipo (Prova, Reunião, Aula, Feriado, etc.)

Data

Cor personalizada

Descrição

🖊️ Edição de eventos já cadastrados

❌ Exclusão de eventos

📑 Lista de eventos cadastrados

🔄 Navegação entre meses

⭐ Destaque automático para o dia atual

📍 Possibilidade de vários eventos no mesmo dia

🎨 Exibição de eventos ao passar o mouse sobre o dia

📂 Dados salvos no navegador (localStorage)

🎯 Objetivo do Módulo

O objetivo deste módulo é simular uma funcionalidade real de sistemas acadêmicos, permitindo registrar e acompanhar:

Provas

Atividades

Feriados

Reuniões

Prazos

Eventos da instituição

Tudo de maneira simples, sem depender de banco de dados, mas podendo ser integrado posteriormente com SQL caso desejado.

🧠 Como funciona

O sistema funciona assim:

Ao carregar a página, o JavaScript gera o calendário com base na data do sistema.

Todos os eventos são salvos no localStorage, garantindo persistência mesmo ao fechar o navegador.

Ao clicar em Adicionar Evento, o usuário insere:

Data

Tipo

Descrição

Cor

O dia correspondente no calendário muda de cor.

Passando o mouse sobre o dia, aparecem os eventos cadastrados.

No botão Gerenciar Eventos, o usuário pode:

Ver todos os eventos

Editar um evento

Excluir um evento

🖥️ Fluxo esperado no sistema

A secretária acessa o painel de gerenciamento.

Clica em Abrir Calendário.

Na tela do calendário, administra os eventos do período letivo.

Pode retornar para o painel principal através do botão de voltar.

📌 Benefícios do módulo

Funcionamento totalmente offline

Zero dependência de backend para rodar

Facilita apresentação e testes

Interface intuitiva e limpa

Fácil integração com banco de dados no futuro