# A abertura do túnel e a conciliação

**Data:** 2026-10-17

## O que foi feito e por quê

O agente só sai para a internet por um porteiro, que anota cada conexão. Estava assim: a anotação só saía quando a conexão fechava, e um porteiro derrubado de repente deixava conexões sem rastro. Foi fechado: agora há uma linha quando a conexão abre e outra quando fecha, com o motivo, e o porteiro recebe alguns segundos para se despedir antes de ser derrubado. E entrou a conciliação: no fim de cada execução, o FOX compara o caderno do porteiro com o que o agente relatou (quantas conversas, quanto texto, quanto tempo) e registra se as contas batem.

## A prova

- A suíte inteira passou: 5.546 testes, nenhuma falha.
- Ao vivo, sem internet e sem chamada real: com a despedida, o caderno fecha certo e a conciliação dá "bate"; com o porteiro derrubado de repente (o controle invertido), ela acusa a conexão sem fechamento.
- Cada regra da conciliação tem um controle invertido próprio.
- A despedida não custou tempo que se pudesse medir.
- De quebra, foi consertada uma corrida que fazia uma caixa nova falhar ao nascer logo depois da anterior.

## O resultado

Cada conexão do agente deixa rastro do começo ao fim, e cada execução sai com as contas conferidas.
