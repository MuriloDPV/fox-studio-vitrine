<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/protect-yourself-final.png">
    <img src="assets/protect-yourself.svg" width="100%" alt="Animated opening on a black background. One word at a time in the centre of the screen, in hard cuts that get faster, each over its own abstract painting in greys (a brushed disc, a brushed orbit, concentric orbits, an ink wash, a spatter of stars, a hatched sphere, a horizon, a celestial chart): the verb “to protect” in eight languages that share one root. PROTEGER (Portuguese, in orange), PROTECT (English), PROTÉGER (French), PROTEGGERE (Italian), PROTEGIR (Catalan), PROTEJA (Romanian), PROTEKTI (Esperanto) and, last and a little longer, PROTEGERE (Latin, the root of them all). The screen goes black for a moment, and it ends on the FOX Studio logo, a fox inside a hexagon, with the name FOX Studio.">
  </picture>
</p>

# FOX Studio

**An orchestrator for AI agents, designed for the day the agent is wrong.**

[Leia em português](README.pt-BR.md)

FOX Studio runs AI coding agents in an autonomous loop: it picks a task, hands it to an agent, checks the result and stops when its permission runs out. It is built on Claude Code. The agent works contained, the checking is done by something that is not the agent, and a person approves what is critical.

It is under construction, by one developer. The code is private. This repository is the public showcase.

## The problem

An agent that acts on its own makes mistakes. That part is expected.

What makes the mistake expensive is where the agent runs: usually on your machine, on your network, with your files and your credentials. When it gets something wrong, or is talked into something by a text it read along the way, it does it as you.

Most tools answer this by asking you to trust the agent. FOX Studio starts from the opposite rule: **nothing is accepted because the agent said it did it.**

## The security model

This is the high-level view. The internals stay private on purpose.

1. **The agent is contained, and it holds no credential of the person or of the system.** Each run happens in its own isolated box, as an ordinary user without administrator rights, and it sees only the folder of that run. It has no access of its own to the database, the repository or the server. The only secret inside the box is the token it uses to talk to the model, and the network lets it reach only the model's API (item 2).
2. **The agent's network is closed to a single destination.** Everything else is refused. Each connection is recorded when it opens and when it closes, and the record is compared with what the agent reported.
3. **A person approves what is critical.** Actions that cannot be undone wait for a human, by one of two paths: a tap on the person's phone, for the requests the system makes, or a password typed by the person in their own terminal, for the most critical acts. The approval records who approved and when.
4. **The history is append-only.** Nothing is erased or rewritten. A correction or a cancellation is a new line, with its reason, next to the line it corrects.
5. **Validation and review are done by someone who is not the agent.** The system measures what changed on a clean copy of its own, with the rules from before the work started. The agent does not grade itself. A separate reviewer then reads the change, and a person reads it before it reaches the main branch.
6. **Every defense has a test that proves it holds.** Each security test is also run with the defense removed on purpose, and it has to go red. A test that stays green without the defense proves nothing, so it does not count.

## What is proven, and what is not yet

"Proven" here means: it was measured, and the measurement is written up in the [public diary](diario/README.md) (in Portuguese), with the date. All dates are from 2026. Anything else is design, and is listed as such.

### Proven so far

- **Ordinary user, inside and outside the box.** In a live test the agent showed up as an ordinary user on both sides; a box opened without the defenses showed up as administrator. (October 16)
- **One run cannot reach another.** Two runs, one holding a fake secret. With the defense, the other run reached nothing. With the defense removed on purpose, it read the secret, and the test went red. (October 17)
- **Every connection leaves a trace, and all of them go to one place.** In a real run, each connection had an opening line and a closing line, all to the single allowed destination, and the count matched the agent's own report. (October 18)
- **The check does not depend on anything the agent can write.** It builds its own clean history, and validation runs on a copy with the rules from before the work. (October 17 and 21)
- **A rehearsal against a cheating agent.** The real agent program ran against a fake model that followed a script, honest once and cheating several times. The honest run was approved. Each scripted cheat was caught. (October 22)
- **An agent does not outlive its deadline.** With the orchestrator killed in the middle of a run, the agent went down on its own about 30 seconds later. (October 21)
- **One night alone.** Four small documentation tasks were chosen, done and validated overnight with nobody at the keyboard, in nine minutes. The loop stopped by itself when its permission ran out. A person read every changed line before it was merged. (November 3)
- **The stop order.** With the machine overloaded on purpose, a stop sent from a phone killed the agent's processes 17 seconds later, against a limit of 60. This used a test box. (November 6)

Each defense above has its own inverted test: defense removed, test red; defense back, test green.

### Not proven yet

- **The stop order against the real agent.** The measurement above used a test box. The same test on the real agent is still to come.
- **Parts of the model with no public write-up yet.** The agent holding no credential of the person or of the system, the approvals by phone and by password, and the append-only rule across the whole history are part of the design described above, but their proof is not in the public diary yet. Until an entry is published, read them as design.
- **Long unattended work.** One night, four small tasks, read by a person in the morning. That is not evidence about weeks of unattended work or about large changes.
- **Correct code.** Validation checks the acceptance criteria of a task. It does not prove that the code is free of bugs.
- **An unbreakable box.** Containment makes a mistake smaller. It does not make an escape impossible, and this project does not say it does.

No third-party claim is made here. FOX Studio does not present itself as verified or endorsed by anyone.

## How it is built

FOX Studio is built on Claude Code, in three separate layers:

1. **Planning.** The broad discussion of the project and the work orders.
2. **Review.** A reviewer that reads the code, answers the design questions and decides what goes in.
3. **Execution.** One session per task. It implements, measures and ends with a written report.

No security change reaches the main branch without passing the review layer.

## Look closer

These pages are in Portuguese.

- [The diary: each closed step, in plain language](diario/README.md)
- [The architecture, with the path of one task](ARQUITETURA.md)
- [What a session report looks like](exemplo-relatorio-de-auditoria.md)
- [The inverted test pattern, in code](exemplo-teste-controle-invertido.ts)
- [The verdict after a run](exemplo-veredito-conciliacao.json)

The examples are illustrative. They show the shape of the work, without the internals.

## Who builds it

**Murilo**, developer and founder of **FOX**, an automation and AI company in the south of Brazil.

---

*The FOX Studio code is private. This repository is the showcase of the project.*
