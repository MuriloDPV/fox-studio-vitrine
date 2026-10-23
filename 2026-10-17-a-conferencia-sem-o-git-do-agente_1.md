# A conferência sem o git do agente

**Data:** 2026-10-17

## O que foi feito e por quê

Depois que o agente trabalha, o FOX confere o que mudou, sem acreditar no que o agente diz de si mesmo. Estava assim: essa conferência usava o histórico do git que fica na pasta do agente, e as configurações desse histórico o agente pode escrever. Foi fechado: a conferência monta na hora um histórico novo e limpo, a partir do projeto original, e só lê a pasta do agente, sem poder escrever nela. As conferências que não rodam código do agente passaram a vir antes das que rodam.

## A prova

- A suíte inteira passou: 5.334 testes, nenhuma falha.
- Ao vivo, com marcas inofensivas plantadas nas configurações do agente: o git comum enxerga as marcas; a conferência não.
- Controle invertido: com a conferência apontada de volta para o histórico do agente, o teste ficou vermelho.
- A revisão achou mais uma porta pelo mesmo caminho, num caso especial de projeto dentro de projeto. Ela foi medida e fechada antes de juntar o trabalho.
- A caixa da conferência é reaproveitada: a sonda caiu de uns 7 segundos para menos de meio segundo, mais uns 2 segundos para abrir a caixa.

## O resultado

O que o FOX vê do trabalho não depende mais das configurações do git que o agente pode escrever.
