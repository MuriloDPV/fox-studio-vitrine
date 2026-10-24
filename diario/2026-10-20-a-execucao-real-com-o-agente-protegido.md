# A execução real com o agente protegido

**Data:** 2026-10-20

## O que foi feito e por quê

Dentro da caixa, o agente roda um programa principal, que conversa com o modelo. Estava assim: um outro comando, rodando na mesma caixa, conseguia espiar esse programa enquanto ele trabalhava. Isso foi medido e fechado: agora o programa principal roda protegido, e os outros comandos da caixa não conseguem espiar o que ele guarda. E o relato que o agente faz no fim passou a ser lido com regras estritas. Um relato com campo a mais ou com tipo errado não passa, nem um que diga que não conversou com ninguém quando o porteiro viu conversa.

## A prova

- A suíte inteira passou: 5.875 testes, nenhuma falha.
- Controle invertido: um programa sem a proteção foi espiado de dentro da caixa; o programa protegido, não.
- Uma execução real e curta, já com o programa protegido: o agente escreveu o arquivo pedido, sem privilégio, as contas do porteiro bateram com o relato, e a validação aprovou.

## O resultado

Foi a primeira execução real com o agente protegido que fez o trabalho pedido e foi aprovada. O programa principal do agente não pode mais ser espiado pelos outros comandos da caixa.
