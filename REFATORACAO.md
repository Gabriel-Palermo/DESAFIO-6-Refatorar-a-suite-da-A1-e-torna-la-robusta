# Refatoração da suíte A2

## Smells identificados

| Smell (onde e por que é um problema) | Solução |
|---|---|
| Seletores repetidos diretamente nos testes da A1: mudanças na interface exigem alterar vários testes. | Seletores centralizados nos Page Objects de cada tela. |
| Fluxo de login repetido nos cenários: aumenta a duplicação e dificulta a manutenção. | Comando customizado `cy.login(user)`. |
| Passos do carrinho repetidos: aumentam a duplicação. | Comandos `cy.addBackpackToCart()` e `cy.openCart()`. |
| Credenciais misturadas com o comportamento dos testes. | Dados separados em `cypress/fixtures/users.json`, usados nos cenários de sucesso e falha. |
| Esperas fixas podem deixar os testes lentos e instáveis. | Remover `cy.wait(tempo)` e usar asserções com retry automático. |

## Estrutura

- `cypress/pages/`: Page Objects com seletores e ações por tela.
- `cypress/support/commands.js`: comandos reutilizáveis.
- `cypress/fixtures/users.json`: dados de login.
- `cypress/e2e/spec.cy.js`: cinco cenários da A1.

## Stubs

O SauceDemo não oferece uma API de negócio adequada para simular as ações de login e carrinho neste fluxo. Não foi criado um stub artificial. Caso o uso de `cy.intercept()` seja obrigatório na rubrica, é necessário confirmar qual requisição deve ser simulada.

## Estabilidade

A suíte deve passar em três execuções consecutivas:

```bash
npx cypress run
npx cypress run
npx cypress run
