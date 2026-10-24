# O agente sem root

**Data:** 2026-10-16

## O que foi feito e por quê

O agente que escreve o código roda numa caixa isolada (um container). Até aqui, dentro da caixa, ele era o administrador. Agora ele roda como um usuário comum, dentro da caixa e também visto de fora dela, e quem pede a execução não consegue escolher outro usuário, outra pasta pessoal nem as opções perigosas de abertura da caixa. A pasta pessoal do agente virou uma área temporária só dele, que some no fim.

## A prova

- A suíte inteira passou: 5.173 testes, nenhuma falha.
- Cada defesa nova teve controle invertido: tirada a defesa de propósito, os testes dela ficaram vermelhos; com a defesa de volta, verdes.
- Num teste ao vivo, o agente apareceu como usuário comum dentro e fora da caixa; uma caixa aberta sem as defesas apareceu como administrador.
- Os arquivos que já existiam trocaram de dono sem mudar uma vírgula: uma lista com a impressão digital de cada um, uns 3.400 arquivos, deu igual antes e depois.

## O resultado

Se o agente fizer algo errado, ele faz como usuário comum, sem poderes de administrador.
