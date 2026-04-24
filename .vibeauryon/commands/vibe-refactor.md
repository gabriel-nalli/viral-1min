# Vibe Refactor — Conselheiro de Refatoração

Analisa um arquivo e retorna as refatorações mais impactantes com exemplos de antes/depois.

## O que é analisado

- **Tamanho do arquivo** — acima de 200 linhas é um sinal de alerta
- **Complexidade de funções** — funções com muita lógica aninhada
- **Padrões repetidos** — código duplicado que poderia ser abstraído
- **Problemas de naming** — nomes que não comunicam intenção
- **Abstrações faltando** — lógica inline que merece ser extraída
- **Acoplamento** — dependências desnecessárias entre módulos

## Como usar

Chame `vibe_refactor_suggest` com o caminho do arquivo. O VibeAuryon retorna as 3 refatorações prioritárias com exemplos práticos.

## Exemplo de saída

```
REFATORAÇÃO #1 — ALTA PRIORIDADE
Problema: Função handleSubmit com 87 linhas (validação + API + UI)
Solução: Extrair validateForm() e submitToApi() separadamente

Antes:
  async function handleSubmit(data) {
    if (!data.email.includes('@')) { ... }
    if (data.password.length < 8) { ... }
    // 60 mais linhas...
  }

Depois:
  async function handleSubmit(data) {
    const errors = validateForm(data);
    if (errors.length) return setErrors(errors);
    await submitToApi(data);
  }
```

**Arquivo para analisar:** $ARGUMENTS
