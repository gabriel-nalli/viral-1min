# Vibe Env — Verificação de Variáveis de Ambiente

Detecta variáveis faltando, não documentadas e usadas no código mas não declaradas.

## O que é verificado

- **Vars documentadas** — presentes no `.env.example`
- **Vars faltando** — estão no `.env.example` mas não no `.env`
- **Vars não documentadas** — estão no `.env` mas não no `.env.example`
- **Vars usadas no código** — encontradas com `process.env.` mas não declaradas em lugar nenhum

## Segurança

O VibeAuryon NUNCA retorna os valores das variáveis — apenas os nomes das chaves.

## Como usar

Chame `vibe_env_check` na raiz do projeto. O VibeAuryon detecta automaticamente o arquivo de exemplo (`.env.example`, `.env.local.example`, ou `.env.template`).

## Exemplo de saída

```
VARS FALTANDO (no .env.example mas não no .env):
  ⚠️  STRIPE_WEBHOOK_SECRET
  ⚠️  RESEND_API_KEY

VARS NÃO DOCUMENTADAS (no .env mas não no .env.example):
  📝 DATABASE_URL_POOLER

VARS USADAS NO CÓDIGO MAS NÃO DECLARADAS:
  🔍 NEXT_PUBLIC_ANALYTICS_ID
```

**Diretório do projeto (opcional):** $ARGUMENTS
