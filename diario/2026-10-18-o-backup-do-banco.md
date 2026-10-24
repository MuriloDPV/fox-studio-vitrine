# O backup do banco

**Data:** 2026-10-18

## O que foi feito e por quê

Tudo o que o FOX sabe mora num banco de dados. Agora ele tem cópia toda noite: a cópia é cifrada, restaurada num banco de teste e conferida antes de subir para um serviço de armazenamento na nuvem, onde fica travada contra apagamento por um prazo fixo. Toda semana, uma cópia desce da nuvem e é restaurada de novo. Se algo falhar ou atrasar, o aviso chega no celular do Murilo. A instalação foi uma cerimônia, feita pelo Murilo, passo a passo.

## A prova

- Antes da instalação, a suíte inteira passou: 5.453 testes, nenhuma falha.
- A restauração foi conferida tabela por tabela, em dois ambientes diferentes. Controle invertido: uma linha mexida numa cópia, e o teste ficou vermelho.
- A primeira rodada de verdade: 84 tabelas, restauro bom, envio bom, e a cópia baixada da nuvem com a mesma impressão digital da local.
- Três achados, todos fechados: o primeiro desenho deixava o login do backup ler as senhas cifradas dos usuários (medido por teste e tirado antes de ir ao ar); o arquivo de senha chegava com uma permissão que o programa do banco ignora; e o aviso no celular rodava uma versão antiga.

## O resultado

O banco tem cópia diária, conferida, fora da máquina, e cada falha vira aviso.
