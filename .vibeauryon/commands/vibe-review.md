# Vibe Review — Code Review Inteligente

Analisa as mudanças staged e unstaged do git e retorna um code review estruturado.

## O que é analisado

- **Bugs potenciais** — lógica incorreta, null pointers, condições invertidas
- **Edge cases não tratados** — inputs inesperados, estados de erro, race conditions
- **Problemas de segurança** — dados não sanitizados, exposição de dados sensíveis
- **Performance** — operações desnecessárias, N+1 queries, renders ineficientes
- **Consistência de estilo** — padrões do projeto, naming, estrutura

## Resultado

O review é apresentado em três categorias:
- 🔴 **CRITICAL** — Deve ser corrigido antes de commitar
- 🟡 **WARNING** — Recomendado corrigir, mas não bloqueia
- 🔵 **SUGGESTION** — Melhorias opcionais de qualidade

## Como usar

1. Stage as mudanças com `git add` (ou deixe unstaged para revisar tudo)
2. Chame `vibe_code_review` sem parâmetros
3. Revise cada issue com a referência de arquivo:linha

## Exemplo

```
[CRITICAL] src/auth/login.ts:42
  Senha comparada sem hash — use bcrypt.compare()

[WARNING] src/api/users.ts:87
  Sem paginação — pode retornar milhares de registros

[SUGGESTION] src/components/Button.tsx:15
  Extrair variante como prop ao invés de string literal
```

**Contexto adicional (opcional):** $ARGUMENTS
