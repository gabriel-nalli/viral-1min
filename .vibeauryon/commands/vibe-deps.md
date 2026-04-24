# Vibe Deps — Saúde das Dependências

Verifica dependências desatualizadas e vulnerabilidades de segurança no projeto.

## O que é verificado

- **Total de dependências** — produção + desenvolvimento
- **Desatualizadas** — pacotes com versões mais recentes disponíveis
- **Vulnerabilidades** — resultados do `npm audit` por severidade (critical/high/medium/low)
- **Prioridade de atualização** — quais atualizar primeiro

## Como usar

Chame `vibe_deps_analyze` na raiz do projeto. O VibeAuryon roda `npm outdated` e `npm audit` automaticamente.

## Exemplo de saída

```
RESUMO DE DEPENDÊNCIAS
  Total: 47 (32 prod + 15 dev)
  Desatualizadas: 8
  Vulnerabilidades: 2 high, 1 medium

PRIORIDADE DE ATUALIZAÇÃO:
  🔴 next 14.1.0 → 15.2.0 (major)
  🟠 @types/node 20.x → 22.x (major)
  🟡 tailwindcss 3.4.1 → 3.4.17 (patch)

Execute: npm audit fix para corrigir automaticamente
```

**Diretório do projeto (opcional):** $ARGUMENTS
