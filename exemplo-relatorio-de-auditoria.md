# Exemplo: como é um relatório de auditoria

Cada etapa importante do FOX Studio termina com um relatório como este. O texto abaixo é um **exemplo ilustrativo**, com a mesma estrutura dos relatórios reais, sem os detalhes internos.

---

## A conferência sem o repositório do agente

**Objetivo.** A conferência do trabalho não pode depender de nada que o próprio agente escreveu.

**O que foi medido antes de mexer.**
- Pelo caminho antigo, um marcador inofensivo gravado pelo agente na configuração dele era visível para a conferência.
- Pelo desenho novo, o mesmo marcador não aparece.

**O que mudou.**
- A conferência passou a usar um repositório e um ambiente montados pelo próprio sistema, do zero.
- As conferências passaram a rodar antes de qualquer comando do trabalho.

**A prova, com controle invertido.**
- Com o conserto: o marcador não aparece, e o resultado da conferência é o mesmo de antes para trabalho legítimo.
- Sem o conserto (código revertido de propósito): o teste falha. Depois, o código é restaurado e conferido por hash.

**O que ficou aberto, nomeado.**
- Um caso de borda conhecido, com destino definido para uma etapa futura, em vez de escondido.

**Resultado.** Toda a suíte de testes passou; nenhum segredo no histórico; mudança juntada só depois da revisão.
