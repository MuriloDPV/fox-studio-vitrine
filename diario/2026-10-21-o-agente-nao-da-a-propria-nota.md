# O agente não dá a própria nota

**Data:** 2026-10-21

## O que foi feito e por quê

Depois que o agente trabalha, uma validação roda os testes e decide se o trabalho está bom. Estava assim: ela rodava na pasta do agente, com as regras que estavam lá no fim do trabalho, e essas regras o agente podia ter mexido. Foi fechado: agora a validação roda numa cópia do trabalho, com a régua de antes do trabalho começar, e confere a pasta original de novo no fim. A aprovação só vale para a execução que foi conferida, e só se nada mudou desde então.

## A prova

- A suíte inteira passou: 6.038 testes, nenhuma falha.
- Com a configuração da conferência trocada pelo agente, a validação usou a de antes e recusou.
- Com uma ferramenta trocada no meio das dependências, a validação refez a ferramenta e o critério falhou.
- Uma mudança na pasta original durante a validação foi acusada, com a frase dizendo quando ela aconteceu.
- Cada defesa nova teve controle invertido: tirada a defesa, o teste dela ficou vermelho; de volta, verde.

## O resultado

Quem dá a nota não é o agente, e a régua é a de antes do trabalho.
