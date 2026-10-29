## A2 — Refatoração da suíte E2E

Nesta etapa, a suíte de testes da A1 foi refatorada para melhorar a organização e facilitar a manutenção dos testes.

### Alterações realizadas

- **Page Objects:** seletores e ações organizados por tela em `cypress/pages/`.
- **Comandos customizados:** ações reutilizáveis, como login e operações no carrinho, em `cypress/support/commands.js`.
- **Fixtures:** credenciais de teste separadas em `cypress/fixtures/users.json`.
- **Testes E2E:** manutenção dos cinco cenários da A1, incluindo login válido, login inválido, usuário bloqueado e operações no carrinho.
- **Esperas:** uso de asserções do Cypress com novas tentativas automáticas, evitando esperas fixas desnecessárias.

### Como executar

Instale as dependências:

```bash
npm install
```

Execute os testes em modo headless:

```bash
npx cypress run
```

A suíte deve apresentar cinco testes aprovados. Para verificar a estabilidade, execute o comando três vezes consecutivas.

### Documentação da refatoração

O arquivo `REFATORACAO.md` descreve os problemas identificados, as soluções adotadas e a decisão sobre stubs.

### Entrega

Tag da atividade: `atividade-2`.