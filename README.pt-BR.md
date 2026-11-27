<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/protect-yourself-final.png">
    <img src="assets/protect-yourself.svg" width="100%" alt="Abertura animada em fundo preto. Uma palavra por vez no centro da tela, em cortes secos cada vez mais rápidos, cada uma sobre a sua pintura abstrata em tons de cinza (um disco a pincel, uma órbita a pincel, órbitas concêntricas, uma aguada, um respingo de estrelas, uma esfera em hachura, um horizonte, uma carta celeste): o verbo “proteger” em oito línguas da mesma raiz. PROTEGER (português, em laranja), PROTECT (inglês), PROTÉGER (francês), PROTEGGERE (italiano), PROTEGIR (catalão), PROTEJA (romeno), PROTEKTI (esperanto) e, por último e um pouco mais demorado, PROTEGERE (latim, a raiz de todas). Depois, em mais um corte seco, termina na logo do FOX Studio, uma raposa dentro de um hexágono, com o nome FOX Studio.">
  </picture>
</p>

# FOX Studio

**Um orquestrador de agentes de IA, pensado para o dia em que o agente erra.**

[Read in English](README.md)

O FOX Studio roda agentes de IA de programação num laço autônomo: escolhe uma tarefa, entrega a um agente, confere o resultado e para quando a permissão acaba. É construído em cima do Claude Code. O agente trabalha contido, a conferência é feita por quem não é o agente, e uma pessoa aprova o que é crítico.

Está em construção, por um desenvolvedor. O código é privado. Este repositório é a vitrine pública.

## O problema

Um agente que age sozinho erra. Isso é esperado.

O que encarece o erro é o lugar em que o agente roda: quase sempre na sua máquina, na sua rede, com os seus arquivos e as suas credenciais. Quando ele erra, ou é convencido de alguma coisa por um texto que leu no caminho, ele faz isso como se fosse você.

A maioria das ferramentas responde pedindo que você confie no agente. O FOX Studio parte da regra contrária: **nada é aceito porque o agente disse que fez.**

## O modelo de segurança

Esta é a visão de alto nível. Os detalhes internos ficam privados de propósito.

1. **O agente fica contido e não guarda credencial da pessoa nem do sistema.** Cada execução roda numa caixa isolada só dela, como usuário comum, sem poderes de administrador, e enxerga só a pasta daquela execução. Ele não tem acesso próprio ao banco de dados, ao repositório nem ao servidor. O único segredo dentro da caixa é o token que ele usa para falar com o modelo, e a rede só o deixa chegar à API do modelo (item 2).
2. **A rede do agente é fechada a um destino só.** Todo o resto é recusado. Cada conexão é registrada quando abre e quando fecha, e o registro é comparado com o que o agente relatou.
3. **Uma pessoa aprova o que é crítico.** As ações que não têm volta esperam por uma pessoa, por um de dois caminhos: um toque no celular dela, para os pedidos que o sistema faz, ou a senha digitada por ela no próprio terminal, para os atos mais críticos. A aprovação registra quem aprovou e quando.
4. **O histórico só cresce.** Nada se apaga nem se reescreve. Uma correção ou uma desistência é uma linha nova, com o motivo, ao lado da linha que ela corrige.
5. **A validação e a revisão são feitas por quem não é o agente.** O sistema mede o que mudou numa cópia limpa dele mesmo, com as regras de antes de o trabalho começar. O agente não dá a própria nota. Depois, um revisor separado lê a mudança, e uma pessoa lê antes de ela chegar ao código principal.
6. **Cada defesa tem um teste que prova que ela segura.** Cada teste de segurança roda também com a defesa tirada de propósito, e tem de ficar vermelho. Um teste que continua verde sem a defesa não prova nada, e por isso não conta.

## O que está provado e o que ainda não está

"Provado", aqui, quer dizer: foi medido, e a medição está escrita no [diário público](diario/README.md), com a data. Todas as datas são de 2026. Todo o resto é desenho, e aparece como desenho.

### Provado até aqui

- **Usuário comum, dentro e fora da caixa.** Num teste ao vivo, o agente apareceu como usuário comum dos dois lados; uma caixa aberta sem as defesas apareceu como administrador. (16 de outubro)
- **Uma execução não alcança a outra.** Duas execuções, uma delas com um segredo de mentira. Com a defesa, a outra não alcançou nada. Com a defesa tirada de propósito, ela leu o segredo, e o teste ficou vermelho. (17 de outubro)
- **Cada conexão deixa rastro, e todas vão para um lugar só.** Numa execução real, cada conexão teve uma linha de abertura e uma de fechamento, todas para o único destino permitido, e a conta bateu com o relato do agente. (18 de outubro)
- **A conferência não depende de nada que o agente possa escrever.** Ela monta um histórico limpo e próprio, e a validação roda numa cópia, com as regras de antes do trabalho. (17 e 21 de outubro)
- **Um ensaio contra um agente trapaceiro.** O programa do agente de verdade rodou contra um modelo de mentira que seguia um roteiro, uma vez honesto e várias vezes trapaceando. A execução honesta foi aprovada. Cada trapaça do roteiro foi pega. (22 de outubro)
- **O agente não passa do prazo.** Com o orquestrador derrubado no meio de uma execução, o agente caiu sozinho uns 30 segundos depois. (21 de outubro)
- **Uma noite sozinho.** Quatro tarefas pequenas de documentação foram escolhidas, feitas e validadas de madrugada, sem ninguém no teclado, em nove minutos. O laço parou sozinho quando a permissão acabou. Uma pessoa leu cada linha alterada antes de juntar. (3 de novembro)
- **A ordem de parar.** Com a máquina sobrecarregada de propósito, a parada mandada pelo celular derrubou os processos do agente 17 segundos depois, para um limite de 60. A prova usou uma caixa de teste. (6 de novembro)

Cada defesa acima tem o seu teste invertido: defesa tirada, teste vermelho; defesa de volta, teste verde.

### Ainda não provado

- **A ordem de parar contra o agente de verdade.** A medição acima usou uma caixa de teste. A mesma prova no agente de verdade ainda vem.
- **Partes do modelo que ainda não têm entrada pública.** O agente sem credencial da pessoa nem do sistema, as aprovações pelo celular e pela senha, e a regra de só crescer no histórico inteiro fazem parte do desenho descrito acima, mas a prova deles ainda não está no diário público. Até uma entrada ser publicada, leia como desenho.
- **Trabalho longo sem ninguém olhando.** Uma noite, quatro tarefas pequenas, lidas por uma pessoa de manhã. Isso não é evidência sobre semanas de trabalho sozinho nem sobre mudanças grandes.
- **Código certo.** A validação confere os critérios de aceite de uma tarefa. Ela não prova que o código não tem defeito.
- **Uma caixa que não quebra.** A contenção diminui o tamanho do erro. Ela não torna uma fuga impossível, e este projeto não diz que torna.

Aqui não há afirmação de terceiros. O FOX Studio não se apresenta como verificado nem endossado por ninguém.

## Como é construído

O FOX Studio é construído em cima do Claude Code, em três camadas separadas:

1. **Planejamento.** A discussão ampla do projeto e os pedidos de trabalho.
2. **Revisão.** Um revisor que lê o código, responde às perguntas de desenho e decide o que entra.
3. **Execução.** Uma sessão por tarefa. Ela implementa, mede e termina com um relatório escrito.

Nenhuma mudança de segurança chega ao código principal sem passar pela camada de revisão.

## Veja de perto

- [O diário: cada etapa fechada, em português simples](diario/README.md)
- [A arquitetura, com o caminho de uma tarefa](ARQUITETURA.md)
- [Como é um relatório de sessão](exemplo-relatorio-de-auditoria.md)
- [O padrão do teste invertido, em código](exemplo-teste-controle-invertido.ts)
- [O veredito depois de uma execução](exemplo-veredito-conciliacao.json)

Os exemplos são ilustrativos. Mostram a forma do trabalho, sem os detalhes internos.

## Quem constrói

**Murilo**, desenvolvedor e fundador da **FOX**, empresa de automação e IA no interior do Rio Grande do Sul.

---

*O código do FOX Studio é privado. Este repositório é a vitrine do projeto.*
