# O botão de parar que para de verdade

**Data:** 2026-11-06

## O que estava errado

Do celular, o Murilo pode mandar o FOX parar a qualquer hora. Numa prova de 2 de novembro, a máquina foi sobrecarregada de propósito, com o disco do agente escrevendo sem parar, e a parada foi mandada. O banco registrou "parado", mas o agente continuou vivo: o programa que deveria derrubá-lo ficou esperando uma resposta que não vinha. Parecia parado e não estava. Esse tipo de diferença é o defeito que o projeto mais teme.

## O que mudou

A parada deixou de pedir ao programa que gerencia as caixas e passou a derrubar o grupo de processos do agente direto pelo sistema operacional, que não depende daquele programa responder. A permissão para isso é a menor possível: só a escrita naquele ponto.

## A prova

- Primeiro, de dentro do serviço do laço, com as mesmas proteções da produção: a caixa de prova foi derrubada pelo caminho novo. Sem a permissão nova, a mesma tentativa foi recusada, o que mostra que a proteção continua no lugar.
- Depois, a prova que tinha falhado, repetida: o disco do agente sobrecarregado, um minuto de espera e a parada pelo celular. Os processos do agente morreram 17 segundos depois do pedido (o limite é 60), e a caixa sumiu.
- O banco, ao lado, continuou respondendo normal durante a sobrecarga.

## O resultado

"Parado no banco" e "o agente morreu" voltaram a ser a mesma coisa, e isso foi medido, não suposto. A prova usou uma caixa de teste, e não o agente de verdade: essa ainda é a próxima.
