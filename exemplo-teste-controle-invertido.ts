// Exemplo ilustrativo do padrão "controle invertido" usado no FOX Studio.
//
// Todo teste de segurança é rodado duas vezes:
//   1. com o conserto: tem de passar;
//   2. sem o conserto (revertido de propósito, só no ensaio): tem de FALHAR.
// Se o teste passa nos dois casos, ele não prova nada, e não entra.

import { describe, expect, it } from "vitest";

// Uma regra simples: a conferência só aceita uma base que seja um hash completo,
// e nunca um nome que alguém de fora possa redirecionar.
function conferirBase(base: string): string {
  if (!/^[0-9a-f]{40}$/u.test(base)) {
    throw new Error(`base fora da forma: ${base}`);
  }
  return base;
}

describe("a base da conferência", () => {
  it("aceita um hash completo", () => {
    const hash = "a".repeat(40);
    expect(conferirBase(hash)).toBe(hash);
  });

  it("recusa um nome de ref, que outro processo poderia apontar para outro lugar", () => {
    // Controle invertido: trocando a regex por /.*/ (o "sem conserto"),
    // esta linha deixa de lançar e o teste fica vermelho.
    expect(() => conferirBase("main")).toThrow(/fora da forma/u);
  });
});
