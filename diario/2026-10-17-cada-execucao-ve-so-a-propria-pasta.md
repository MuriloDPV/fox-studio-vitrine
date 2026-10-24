# Cada execução vê só a própria pasta

**Data:** 2026-10-17

## O que foi feito e por quê

Cada execução do agente trabalha numa pasta própria, mas todas moram no mesmo disco compartilhado. Estava assim: a caixa do agente recebia o disco inteiro, e ele conseguia enxergar as pastas das outras execuções. Isso foi medido e fechado: agora cada caixa recebe só a pasta da sua execução. E as opções de abertura da caixa passaram a ser uma lista do que é permitido, e não só uma lista do que é proibido.

## A prova

- A suíte inteira passou: 5.288 testes, nenhuma falha.
- Um teste ao vivo com duas execuções, A e B: B guarda um segredo de mentira, e A tenta ler. Com a defesa, A não alcança nada de B (10 de 10 verdes).
- Controle invertido: com a defesa tirada de propósito, o agente de A leu o segredo de B, e a pasta de B mudou. O teste ficou vermelho, como devia.

## O resultado

Uma execução não lê nem mexe no trabalho de outra.
