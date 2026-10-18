# FOX Studio

**Autonomia com prova.** Uma plataforma em construção para agentes de IA trabalharem em código sozinhos, em que cada passo deixa uma prova que um humano consegue conferir.

> *English: FOX Studio is a platform, under construction, for AI agents to work on code on their own while every step leaves evidence a human can verify. Built by Murilo (FOX) together with Claude.*

## O problema

Dá para pedir a uma IA que escreva código. Difícil é deixá-la trabalhar **sozinha**, de noite, sem ninguém olhando, e confiar no que ela entregou. A maioria das ferramentas pede essa confiança. O FOX Studio parte do contrário: **nada é aceito porque o agente disse que fez.**

## A ideia

- **O agente trabalha preso:** cada execução roda isolada, sem privilégios de administrador, enxergando só a própria pasta e falando só com o que é permitido.
- **A conferência é de fora:** o que mudou é medido pelo sistema, com os próprios registros dele, e não pelo relato do agente.
- **O humano decide o que importa:** ações de impacto passam por aprovação, com registro de quem aprovou e quando.
- **Toda falha é medida antes de ser consertada**, e todo conserto vem com um teste que prova que, sem ele, a falha volta.

## Como o Claude entra

O FOX Studio é construído **com** o Claude, em três camadas:

1. **Planejamento:** a discussão ampla do projeto e os pedidos de trabalho.
2. **Revisão:** o Claude como revisor dos pontos críticos. Lê o código, responde às perguntas de desenho e decide o que entra.
3. **Execução:** o Claude Code implementa, mede e relata, numa sessão por tarefa, sempre com um relatório de auditoria no fim.

Nenhuma mudança de segurança entra no código principal sem passar pela revisão.

## Em números

- mais de **5.500 testes automatizados**;
- cada etapa importante com **relatório de auditoria** e métricas registradas sessão a sessão;
- **backup cifrado diário**, testado com uma restauração de verdade toda noite e guardado fora do servidor.

## Veja de perto

- [A arquitetura, com o fluxo de uma tarefa](ARQUITETURA.md)
- [Como é um relatório de auditoria](exemplo-relatorio-de-auditoria.md)
- [O padrão "controle invertido" num teste](exemplo-teste-controle-invertido.ts)
- [O veredito da conciliação depois de uma execução](exemplo-veredito-conciliacao.json)

Os exemplos são ilustrativos: mostram a forma do trabalho, sem os detalhes internos.

## Próximos passos

- fechar o marco de segurança do executor;
- revisão externa da arquitetura por outras IAs;
- o laço autônomo: o FOX Studio escolhendo, executando e entregando tarefas sozinho, com as provas no lugar.

## Quem constrói

**Murilo**, desenvolvedor e fundador da **FOX**, empresa de automação e IA no interior do Rio Grande do Sul, com o **Claude** (Anthropic) como parceiro de desenvolvimento.

---

*O código do FOX Studio é privado. Este repositório é a vitrine do projeto. Veja também a [arquitetura](ARQUITETURA.md).*
