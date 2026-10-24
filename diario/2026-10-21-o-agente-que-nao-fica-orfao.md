# O agente que não fica órfão

**Data:** 2026-10-21

## O que foi feito e por quê

Quem abre a caixa do agente e a fecha no fim é o FOX. Se o FOX caísse no meio, a caixa podia ficar aberta, com o agente sozinho lá dentro. Agora cada caixa nasce com um vigia próprio, que derruba o agente quando o prazo acaba, com o FOX vivo ou não. O pedido de parar passou a ser conferido: o FOX só anota que parou depois de ver a caixa fechada. E uma varredura roda a cada minuto, derruba o que passou do prazo e avisa o Murilo no celular.

## A prova

- A suíte inteira passou: 5.962 testes, nenhuma falha.
- Com o FOX derrubado à força no meio da execução, o agente caiu sozinho uns 30 segundos depois.
- Um agente que ignora o pedido de parar foi derrubado mesmo assim, e o fechamento ficou anotado em uns 2 segundos.
- Cada defesa nova teve controle invertido: tirada a defesa, o teste dela ficou vermelho; de volta, verde.

## O resultado

Uma caixa de agente não fica aberta para sempre, e "parou" só é anotado quando a parada foi vista.
