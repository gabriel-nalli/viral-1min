# Vibe Explain — Entenda Qualquer Arquivo

Explica qualquer arquivo do projeto em linguagem simples — como um desenvolvedor sênior explicando para o time.

## O que é explicado

- **O que o arquivo faz** — propósito e responsabilidade principal
- **Funções e componentes chave** — o que cada parte faz
- **Fluxo de dados** — como os dados entram, são transformados e saem
- **Dependências** — o que esse arquivo usa e quem depende dele

## Níveis de audiência

- `beginner` — explica conceitos básicos, evita jargão
- `intermediate` — assume conhecimento de programação (padrão)
- `senior` — foca em decisões arquiteturais e trade-offs

## Como usar

Chame `vibe_explain_code` com o caminho do arquivo. Passe `audience` para ajustar o nível.

## Exemplo

```
/vibe-explain src/lib/auth.ts
/vibe-explain src/hooks/useCart.ts audience=beginner
```

**Arquivo para explicar:** $ARGUMENTS
