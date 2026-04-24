# Vibe Test — Gerador de Testes

Gera um arquivo de testes completo para qualquer arquivo do projeto, cobrindo happy path, edge cases e casos de erro.

## O que é gerado

- **Happy path** — comportamento esperado com inputs válidos
- **Edge cases** — limites, valores nulos, strings vazias, arrays vazios
- **Error cases** — como o código se comporta quando algo dá errado

## Framework detectado automaticamente

O VibeAuryon lê o `package.json` para detectar Jest, Vitest ou Playwright. Você também pode especificar manualmente.

## Como usar

1. Informe o caminho do arquivo que deseja testar
2. Chame `vibe_test_generate` com `file_path`
3. O conteúdo do arquivo de teste é retornado pronto para colar

## Exemplo

```
/vibe-test src/utils/formatDate.ts
```

Gera: `src/utils/formatDate.test.ts` com todos os casos relevantes.

**Caminho do arquivo:** $ARGUMENTS
